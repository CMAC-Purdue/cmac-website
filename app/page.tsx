import Image from "next/image";
import Link from "next/link";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#F5F0E8] py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
          <Image
            src="/cmaclogo.jpg"
            alt="CMAC Logo"
            width={140}
            height={140}
            className="rounded-xl"
          />
          <h1 className="text-5xl font-bold tracking-tight text-black">
            CMAC at Purdue
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Commodities and Markets Analytics Club
          </p>
          <div className="flex gap-4 mt-2">
            <Link
              href="/about"
              className="px-6 py-2.5 rounded-full bg-[#C8922A] text-white font-medium hover:bg-[#b07820] transition-colors"
            >
              Meet the Team
            </Link>
            <Link
              href="/projects"
              className="px-6 py-2.5 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
             The Commodities & Markets Analytics Club at Purdue has two main Goals. We first aim to help members 
             deepen their understanding of futures markets and strengthen 
             their ability to evaluate and interpret them.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through weekly meetings and simulated trading competitions, we aim to provide students with hands-on experience and practice in the trading realm. We also aim to increase the members' knowledge of how programming impacts the commodities sector and allow them to practice by constructing programs and models of their own.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col gap-3"
              >
                <span className="text-3xl">{p.icon}</span>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

const pillars = [
  {
    icon: "📊",
    title: "Market Analysis",
    body: "We dive deep into commodities markets — studying price drivers, supply and demand dynamics, and macroeconomic forces shaping global trade.",
  },
  {
    icon: "🏆",
    title: "Competitions",
    body: "Members compete in trading simulations and case competitions, applying real analytical frameworks under pressure to sharpen practical skills.",
  },
  {
    icon: "🤝",
    title: "Industry Network",
    body: "We host guest speakers, alumni panels, and networking events to connect students with professionals in trading, banking, and ag-business.",
  },
];
