// using System;

// namespace Domain;

// public enum FollowUpType
// {
//     NotSpecified,
//     Email,
//     Call,
//     LinkedInMessage,
//     Text
// }

// public class FollowUp
// {
//     public string Id { get; set; } = Guid.NewGuid().ToString();
//     public DateTime Date { get; set; }
//     public string? Note { get; set; }
//     public FollowUpType Type { get; set; } = FollowUpType.NotSpecified;
    
//     // foreign keys
//     public string? PointOfContactId { get; set; }
//     public PointOfContact? PointOfContact { get; set; }
//     public required string JobId { get; set; }
//     public Job? Job { get; set; }

// }