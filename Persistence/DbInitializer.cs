using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context)
    {
        if (context.Jobs.Any()) return;

        var now = DateTime.Now;

        var jobs = new List<Job>
        {
            new()
            {
                CompanyName = "Northstar Labs",
                PositionTitle = "Junior Software Developer",
                Status = JobStatus.Applied,
                DateApplied = now.AddDays(-3),
                JobUrl = "https://example.com/jobs/northstar-junior-software-developer",
                Location = "Brisbane, QLD",
                Source = "LinkedIn",
                CreatedAt = now.AddDays(-3),
                UpdatedAt = now.AddDays(-3)
            },
            new()
            {
                CompanyName = "Riverbank Digital",
                PositionTitle = "Frontend Developer",
                Status = JobStatus.Interviewing,
                DateApplied = now.AddDays(-12),
                JobUrl = "https://example.com/jobs/riverbank-frontend-developer",
                Location = "Remote",
                Source = "Seek",
                CreatedAt = now.AddDays(-12),
                UpdatedAt = now.AddDays(-2)
            },
            new()
            {
                CompanyName = "Brightpath Health",
                PositionTitle = "Full Stack Developer",
                Status = JobStatus.Interviewing,
                DateApplied = now.AddDays(-18),
                JobUrl = "https://example.com/jobs/brightpath-full-stack-developer",
                Location = "Sydney, NSW",
                Source = "Company website",
                CreatedAt = now.AddDays(-18),
                UpdatedAt = now.AddDays(-5)
            },
            new()
            {
                CompanyName = "Lantern Finance",
                PositionTitle = "Graduate Backend Engineer",
                Status = JobStatus.Offer,
                DateApplied = now.AddMonths(-1),
                JobUrl = "https://example.com/jobs/lantern-graduate-backend-engineer",
                Location = "Melbourne, VIC",
                Source = "GradConnection",
                CreatedAt = now.AddMonths(-1),
                UpdatedAt = now.AddDays(-1)
            },
            new()
            {
                CompanyName = "Cloudline Systems",
                PositionTitle = "C# Developer",
                Status = JobStatus.Rejected,
                DateApplied = now.AddMonths(-2),
                JobUrl = "https://example.com/jobs/cloudline-csharp-developer",
                Location = "Brisbane, QLD",
                Source = "Indeed",
                CreatedAt = now.AddMonths(-2),
                UpdatedAt = now.AddMonths(-1)
            },
            new()
            {
                CompanyName = "Oak & Pixel",
                PositionTitle = "Web Developer",
                Status = JobStatus.Ghosted,
                DateApplied = now.AddMonths(-3),
                Location = "Remote",
                Source = "LinkedIn",
                CreatedAt = now.AddMonths(-3),
                UpdatedAt = now.AddMonths(-3)
            },
            new()
            {
                CompanyName = "Summit Retail",
                PositionTitle = "Application Support Developer",
                Status = JobStatus.Applied,
                DateApplied = now.AddDays(-7),
                JobUrl = "https://example.com/jobs/summit-application-support-developer",
                Location = "Gold Coast, QLD",
                Source = "Seek",
                CreatedAt = now.AddDays(-7),
                UpdatedAt = now.AddDays(-7)
            },
            new()
            {
                CompanyName = "Atlas Learning",
                PositionTitle = "Software Engineer",
                Status = JobStatus.Applied,
                DateApplied = now.AddDays(-1),
                JobUrl = "https://example.com/jobs/atlas-software-engineer",
                Location = "Remote",
                Source = "Referral",
                CreatedAt = now.AddDays(-1),
                UpdatedAt = now.AddDays(-1)
            },
            new()
            {
                CompanyName = "Harbour Analytics",
                PositionTitle = "Data Integration Developer",
                Status = JobStatus.Rejected,
                DateApplied = now.AddMonths(-1).AddDays(-10),
                JobUrl = "https://example.com/jobs/harbour-data-integration-developer",
                Location = "Brisbane, QLD",
                Source = "Company website",
                CreatedAt = now.AddMonths(-1).AddDays(-10),
                UpdatedAt = now.AddDays(-20)
            },
            new()
            {
                CompanyName = "Evergreen Energy",
                PositionTitle = "Graduate Software Engineer",
                Status = JobStatus.Interviewing,
                DateApplied = now.AddDays(-21),
                JobUrl = "https://example.com/jobs/evergreen-graduate-software-engineer",
                Location = "Perth, WA",
                Source = "Indeed",
                CreatedAt = now.AddDays(-21),
                UpdatedAt = now.AddDays(-4)
            }
        };

        context.Jobs.AddRange(jobs);
        await context.SaveChangesAsync();

    }
}
