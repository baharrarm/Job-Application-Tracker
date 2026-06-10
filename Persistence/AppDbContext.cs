using System;
using System.Data;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class AppDbContext(DbContextOptions options): DbContext(options)
{
    public required DbSet<Job> Jobs { get; set; }
    // public required DbSet<User> Users { get; set; }
    // public required DbSet<JobNote> JobNotes { get; set; }
    // public required DbSet<PointOfContact> PointsOfContact { get; set; }
    // public required DbSet<FollowUp> FollowUps { get; set; }
}