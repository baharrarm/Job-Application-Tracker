using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Jobs.Commands;

public class EditJob
{
    public class Command: IRequest
    {
        public required Job Job { get; set; }
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var job = await context.Jobs.FindAsync([request.Job.Id], cancellationToken)
                ?? throw new Exception("Cannot find job.");

            mapper.Map(request.Job, job);

            await context.SaveChangesAsync(cancellationToken);
        }
    }
}