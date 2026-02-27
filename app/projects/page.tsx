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

      {/* Projects */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
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

const competitions = [
  {
    title: "CME Trading Competition",
    status: "Upcoming",
    year: "TBD",
    description: "The CME's annual trading competition. Hundreds of teams participate in paper trading for the chance to win cash prizes.",
    result: null,
  },
  {
    title: "Internal Simulation",
    status: "Upcoming",
    year: "Continuous",
    description: "The CMAC will be holding a paper trading competition among club members. Members are encouraged to attempt algorithmic trading and market analysis to create a strong portfolio.",
    result: "More details will be provided as the competition approaches, including an SDK for data analysis and trading within the simulation.",
  },
  {
    title: "Data and Development",
    status: "Upcoming",
    year: "Continuous",
    description: "Members of the CMAC will create different data science and software projects related to market analysis and trading. Projects will be evaluated on criteria such as efficiency, utility, and overall idea.",
    result: "More details will be provided as the competition approaches, such as acceptable projects and explicit judging criteria.",
  },
];

const researchProjects = [
  {
    title: "Club Infrastructure",
    status: "Active",
    description: "Building and maintaining new club software. Examples include the club website, trading simulation platforms, and development challenges.",
    lead: "John Swift",
  }, 
];
