export default function StudentsPage() {
  // Dummy data for 10 teams
  const teams = [
    {
      teamName: "Team 1",
      members: [
        { name: "Student 1", linkedin: "https://linkedin.com/in/student1" },
        { name: "Student 2", linkedin: "https://linkedin.com/in/student2" },
        { name: "Student 3", linkedin: "https://linkedin.com/in/student3" },
        { name: "Student 4", linkedin: "https://linkedin.com/in/student4" },
      ],
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">
        Students Corner
      </h1>
      <p className="text-center text-gray-700 mb-10">
        Each team will edit their card below and add members with LinkedIn profiles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.map((team, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              {team.teamName}
            </h2>
            <ul className="space-y-2">
              {team.members.map((member, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center border-b pb-1"
                >
                  <span className="font-medium">{member.name}</span>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    LinkedIn
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
