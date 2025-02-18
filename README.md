**NestJS**
Run in VScode: npm run start

sample testing in Postman:

Event DTOs
- request method to POST and use URL: http://localhost:3000/events
```json
{
  "title": "Tech Conference 2025",
  "description": "A global event showcasing the latest in tech innovations, speakers, and workshops.",
  "date": "2025-06-15",
  "maxAttendees": 500,
  "organizerEmail": "organizer@example.com",
  "eventId": "3d1d2e13-9fba-4c3a-90fc-16d31dbfd5bb",
  "eventCode": "tech-conf-2025"
}
```

other DTOs
- request method to POST and use URL: http://localhost:3000/validate/{sample}
- sample: array | nested | contact | credit-card | isbn | custom-format | telco 
