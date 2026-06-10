using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class JobsController (AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Job>>> GetJobs (){
        return await context.Jobs.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Job>> GetJobDetails(string id)
    {
        var job = await context.Jobs.FindAsync(id);

        if (job == null) 
            return NotFound();

        return job;
    }
}