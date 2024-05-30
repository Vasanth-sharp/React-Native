import React, { useState } from "react";
import { Avatar, Box, ListItem } from "@react-native-material/core";
import { FlatList } from "react-native-gesture-handler";

export default function Draft() {
  const [mails, setMails] = useState([
    { id: 1, subject: "Meeting today", content: "Talk about meeting!.." },
    { id: 2, subject: "whats up", content: "talk about content 2" },
    {
      id: 3,
      subject: "good morning",
      content: "design the content with in today",
    },
    { id: 4, subject: "Lunch Break", content: "Time to grab some food!" },
    {
      id: 5,
      subject: "Follow Up",
      content: "Need to follow up on yesterday's task.",
    },
    {
      id: 6,
      subject: "Project Update",
      content: "Prepare for the project update meeting.",
    },
    {
      id: 7,
      subject: "Brainstorming Session",
      content: "Let's generate some creative ideas!",
    },
    {
      id: 8,
      subject: "Deadline Reminder",
      content: "Don't forget about the upcoming deadline.",
    },
    {
      id: 9,
      subject: "Team Building Activity",
      content: "Time to bond with your colleagues!",
    },
    {
      id: 10,
      subject: "Vacation Request",
      content: "Need some time off? Submit your request here.",
    },
    {
      id: 11,
      subject: "New Client Call",
      content: "Prepare for the call with a potential new client.",
    },
    { id: 12, subject: "Bug Report", content: "Found a bug? Report it here." },
    {
      id: 13,
      subject: "Knowledge Sharing",
      content: "Share your expertise with your colleagues.",
    },
    {
      id: 14,
      subject: "Performance Review",
      content: "Time to discuss your performance.",
    },
    {
      id: 15,
      subject: "Performance Review Follow-up",
      content: "Schedule a follow-up meeting after your review.",
    },
    {
      id: 16,
      subject: "Training Session",
      content: "Learn a new skill or improve your existing ones.",
    },
    {
      id: 17,
      subject: "Code Review",
      content: "Review code written by yourself or others.",
    },
    {
      id: 18,
      subject: "Server Maintenance",
      content: "Scheduled maintenance on the server. Expect downtime.",
    },
    {
      id: 19,
      subject: "Client Feedback",
      content: "Review feedback from a client.",
    },
    {
      id: 20,
      subject: "Offboarding Process",
      content: "New employee starting? Prepare for the offboarding process.",
    },
    {
      id: 21,
      subject: "Security Awareness",
      content: "Stay informed about cybersecurity best practices.",
    },
    {
      id: 22,
      subject: "Celebrating Success",
      content: "Let's recognize achievements and milestones!",
    },
    {
      id: 23,
      subject: "Work Anniversary",
      content: "Celebrate a colleague's work anniversary!",
    },
    {
      id: 24,
      subject: "Birthday Celebration",
      content: "Wish a colleague a happy birthday!",
    },
    {
      id: 25,
      subject: "Company Announcement",
      content: "Stay updated on important company news.",
    },
    {
      id: 26,
      subject: "Survey Participation",
      content: "Help improve the company by participating in this survey.",
    },
    {
      id: 27,
      subject: "One-on-One Meeting",
      content: "Schedule a one-on-one meeting with your manager.",
    },
    {
      id: 28,
      subject: "Meeting Minutes",
      content: "Review and finalize meeting minutes.",
    },
    {
      id: 29,
      subject: "Project Planning",
      content: "Plan and strategize for upcoming projects.",
    },
    {
      id: 30,
      subject: "End of Week Wrap-up",
      content: "Reflect on the week's accomplishments and plan for next week.",
    },
  ]);
  return (
    <Box>
      <FlatList
        data={mails}
        renderItem={({ item }) => (
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar
                image={{
                  uri: `https://mui.com/static/images/avatar/${item.id}.jpg`,
                }}
              />
            }
            title={item.subject}
            secondaryText={item.content}
          />
        )}
      />
    </Box>
  );
}
