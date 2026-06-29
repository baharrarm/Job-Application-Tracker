using System;
using MediatR;
using Persistence;

namespace Application.Jobs.Commands;

public class DeleteJob
{
    public class Command : IRequest
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var job = await context.Jobs.FindAsync([request.Id], cancellationToken)
                ?? throw new Exception("Cannot find job.");

            context.Remove(job);

            await context.SaveChangesAsync(cancellationToken);

        }
    }
}