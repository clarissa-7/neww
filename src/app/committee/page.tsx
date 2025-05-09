const committeeMembers = [
  { name: 'John Doe', role: 'Chairperson' },
  { name: 'Jane Smith', role: 'Secretary' },
  { name: 'Bob Johnson', role: 'Treasurer' },
  // Add more members as needed
];

export default function Committee() {
  return (
    <div>
      <h1>Committee Members</h1>
      <ul>
        {committeeMembers.map((member, index) => (
          <li key={index}>{member.name} - {member.role}</li>
        ))}
      </ul>
    </div>
  );
}
