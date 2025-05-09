const meetings = [
  { date: '2025-05-01', minutes: 'Discussed maintenance issues.' },
  { date: '2025-06-01', minutes: 'Approved budget for the year.' },
  // Add more meetings as needed
];

export default function Meetings() {
  return (
    <div>
      <h1>Meetings</h1>
      <ul>
        {meetings.map((meeting, index) => (
          <li key={index}>
            <strong>{meeting.date}</strong>: {meeting.minutes}
          </li>
        ))}
      </ul>
    </div>
  );
}
