using System;
using Application.Jobs.Commands;
using Application.Jobs.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class JobsController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Job>>> GetJobs (){
        return await Mediator.Send(new GetJobsList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Job>> GetJobDetails(string id)
    {
        return await Mediator.Send(new GetJobDetails.Query{Id = id});
    }

    [HttpPost]
    public async Task<ActionResult<string>> AddJob(Job job)
    {
        return await Mediator.Send(new AddJob.Command{Job = job});
    }

    [HttpPut]
    public async Task<ActionResult> EditJob(Job job)
    {
        await Mediator.Send(new EditJob.Command{Job = job});

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteJob(string id)
    {
        await Mediator.Send(new DeleteJob.Command{Id = id});

        return Ok();
    }
}