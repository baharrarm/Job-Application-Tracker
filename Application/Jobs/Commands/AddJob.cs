using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Jobs.Commands;

public class AddJob
{
    public class Command: IRequest<string>
    {
        public required Job Job {get; set;}
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            context.Jobs.Add(request.Job);
            await context.SaveChangesAsync(cancellationToken);
            return request.Job.Id;
        }
    }
}