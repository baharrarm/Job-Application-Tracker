using System;

namespace Domain;

public enum JobStatus
{
    Applied,
	Interviewing,
	Offer,
	Rejected,
	Ghosted
}

public class Job
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public JobStatus Status { get; set; }
    public DateTime DateApplied { get; set; }
    public required string CompanyName { get; set; }
    public required string PositionTitle { get; set; }
    public string? JobUrl { get; set; }
    public string? Location { get; set; }
    public string? Source { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    // // foreign keys
    // public required string UserId { get; set; }
    // public User? User { get; set; }

    // // children
    // public ICollection<FollowUp> FollowUps { get; set; } = [];
    // public ICollection<JobNote> Notes { get; set; } = [];
    // public ICollection<PointOfContact> PointsOfContact { get; set; } = [];

}