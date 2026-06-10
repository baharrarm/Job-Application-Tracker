// using System;

// namespace Domain;

// public class PointOfContact
// {
//     public string Id { get; set; } = Guid.NewGuid().ToString();
//     public string? FirstName { get; set; }
//     public required string LastName { get; set; }
//     public string? Role { get; set; }
//     public string? Email { get; set; }
//     public string? Phone { get; set; }
//     public string? LinkedInUrl { get; set; }

//     // foreign keys
//     public required string JobId { get; set; }
//     public Job? Job { get; set; }

//     // children
//     public ICollection<FollowUp> FollowUps { get; set; } = [];
// }