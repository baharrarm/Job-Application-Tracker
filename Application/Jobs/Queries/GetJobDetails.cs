using System;
using System.Diagnostics;
using Domain;
using MediatR;
using Persistence;

namespace Application.Jobs.Queries;

public class GetJobDetails
{
    public class Query: IRequest<Job>
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Job>
    {
        public async Task<Job> Handle(Query request, CancellationToken cancellationToken)
        {
            var job = await context.Jobs.FindAsync([request.Id], cancellationToken);
            
            if (job == null)
                throw new Exception("Job Not Found");

            return job;
        }
    }
}