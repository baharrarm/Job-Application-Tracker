// using System;

// namespace Domain;

// public class JobNote
// {
//     public string Id { get; set; } = Guid.NewGuid().ToString();
//     public required string Content { get; set; }
//     public DateTime CreatedAt { get; set; }
//     public DateTime UpdatedAt { get; set; }

//     // foreign key
//     public required string JobId { get; set; }
//     public Job? Job { get; set; }

// }