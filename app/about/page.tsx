"use client";
import Image from "next/image";
import { useState } from "react";

function Avatar({
  name,
  photo,
  size = "md",
}: {
  name: string;
  photo?: string;
  size?: "md" | "lg";
}) {
  const [imgError, setImgError] = useState(false);
  const dim = size === "lg" ? "w-20 h-20 text-2xl" : "w-12 h-12 text-lg";

  if (photo && !imgError) {
    return (
      <div className={`${dim} rounded-full overflow-hidden flex-shrink-0`}>
        <Image
          src={photo}
          alt={name}
          width={size === "lg" ? 80 : 48}
          height={size === "lg" ? 80 : 48}
          className="object-cover w-full h-full"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`${dim} rounded-full bg-[#C8922A] flex items-center justify-center text-white font-bold flex-shrink-0`}
    >
      {name.charAt(0)}
    </div>
  );
}

export default function About() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#F5F0E8] py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About CMAC</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We&apos;re a student-run organization at Purdue University dedicated to
            developing the next generation of commodities and markets analysts.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            CMAC was founded by a group of Purdue students who saw a gap between
            classroom finance theory and the specialized world of commodities
            markets. From corn and soybeans to crude oil and gold, commodities
            drive the global economy — and we believe students deserve a place to
            study them seriously.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today CMAC brings together students from finance, economics,
            agricultural economics, data science, and engineering to collaborate
            on research, compete in trading challenges, and build lasting
            industry connections.
          </p>
        </div>
      </section>

      {/* Officers */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">Current Officers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {officers.map((o) => (
              <div
                key={o.name}
                className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col items-center text-center gap-2"
              >
                <Avatar name={o.name} photo={o.photo} size="lg" />
                <p className="font-semibold text-black mt-1">{o.name}</p>
                <p className="text-[#C8922A] text-sm font-medium">{o.role}</p>
                {o.major && (
                  <p className="text-gray-500 text-sm">{o.major}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">General Members</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {members.map((m) => (
              <div
                key={m.name}
                className="rounded-xl p-4 border border-gray-200 flex flex-col items-center text-center gap-2"
              >
                <Avatar name={m.name} photo={m.photo} size="md" />
                <p className="font-medium text-black text-sm">{m.name}</p>
                {m.major && (
                  <p className="text-gray-500 text-xs">{m.major}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="bg-[#F5F0E8] py-16 px-6 text-center">
        <div className="max-w-xl mx-auto flex flex-col gap-4 items-center">
          <h2 className="text-2xl font-bold">Want to Join?</h2>
          <p className="text-gray-600">
            CMAC welcomes all Purdue students. Reach out and we&apos;ll get you
            connected with our next meeting.
          </p>
          <a
            href="mailto:cmac@purdue.edu"
            className="px-6 py-2.5 rounded-full bg-[#C8922A] text-white font-medium hover:bg-[#b07820] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

const officers = [
  { name: "Leo Klemm",     role: "President",      major: "Agricultural Economics",          photo: "/people/leo-klemm.png" },
  { name: "Jack Budinger", role: "Vice President",  major: "Quantitative Business Economics", photo: "/people/jack-budinger.png" },
  { name: "John Swift",    role: "CTO",             major: "Computer Science",                photo: "/people/john-swift.jpg" },
];

const members = [
  { name: "Member Name", major: "Finance",      photo: "/people/member-name.jpg" },
  { name: "Member Name", major: "Econ",         photo: undefined },
  { name: "Member Name", major: "Ag Econ",      photo: undefined },
  { name: "Member Name", major: "Data Science", photo: undefined },
  { name: "Member Name", major: "CS",           photo: undefined },
  { name: "Member Name", major: "Statistics",   photo: undefined },
  { name: "Member Name", major: "Finance",      photo: undefined },
  { name: "Member Name", major: "Econ",         photo: undefined },
];
