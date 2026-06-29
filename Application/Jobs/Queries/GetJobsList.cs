using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Jobs.Queries;

public class GetJobsList
{
    public class Query: IRequest<List<Job>>{}

    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Job>>
    {
        public async Task<List<Job>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Jobs.ToListAsync(cancellationToken);
        }
    }

}