const statusColors: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Completed: "bg-gray-100 text-gray-600",
  Upcoming: "bg-blue-100 text-blue-700",
};

export default function Projects() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#F5F0E8] py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Projects & Competitions</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From trading simulations to original research, CMAC members work on
            real projects that develop practical market skills.
          </p>
        </div>
      </section>

      {/* Competitions */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Competitions</h2>
          <div className="flex flex-col gap-6">
            {competitions.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-gray-200 p-6 flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[c.status]}`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
                  {c.result && (
                    <p className="text-[#C8922A] text-sm font-medium">{c.result}</p>
                  )}
                </div>
                {c.year && (
                  <span className="text-gray-400 text-sm shrink-0">{c.year}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Research Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchProjects.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-black">{p.title}</h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full shrink-0 ${statusColors[p.status]}`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                {p.lead && (
                  <p className="text-gray-400 text-xs">Led by {p.lead}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Replace with real competition data
const competitions = [
  {
    title: "Competition Name",
    status: "Active",
    year: "2025–26",
    description: "Placeholder lol",
    result: null,
  },
  {
    title: "Competition Name",
    status: "Completed",
    year: "2024–25",
    description: "placeholder",
    result: "Result / placement if applicable.",
  },
  {
    title: "Competition Name",
    status: "Upcoming",
    year: "Spring 2026",
    description: "description",
    result: null,
  },
];

// Replace with real project data
const researchProjects = [
  {
    title: "Project Title",
    status: "Active",
    description: "Short description of the research project — what markets are being analyzed, what methods are being used, and what the goal is.",
    lead: "Member Name",
  },
  {
    title: "Project Title",
    status: "Active",
    description: "Short description of another research project. Replace with real details about the analysis or topic.",
    lead: "Member Name",
  },
  {
    title: "Project Title",
    status: "Completed",
    description: "A completed research project. Describe the findings or outcome here.",
    lead: "Member Name",
  },
  {
    title: "Project Title",
    status: "Upcoming",
    description: "A planned project for the coming semester. Describe the intended scope and goals.",
    lead: "TBD",
  },
];
