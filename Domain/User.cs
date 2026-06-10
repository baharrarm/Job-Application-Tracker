// using System;

// namespace Domain;

// public class User
// {
//     public string Id { get; set; } = Guid.NewGuid().ToString();
//     public required string Username { get; set; }
//     public string? Email { get; set; }
//     public required string PasswordHash { get; set; }
//     public DateTime CreatedAt { get; set; }
//     public DateTime UpdatedAt { get; set; }

//     // children
//     public ICollection<Job> Jobs { get; set; } = [];

// }