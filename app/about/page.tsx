"use client";
import Image from "next/image";
import Contact from "../components/Contact";
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
                <div className="flex items-center gap-1.5 mt-1">
                  <p className="font-semibold text-black">{o.name}</p>
                  {o.linkedin && (
                    <a href={o.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#C8922A] hover:text-[#b07820] transition-colors flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
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
                <div className="flex items-center gap-1">
                  <p className="font-medium text-black text-sm">{m.name}</p>
                  {m.linkedin && (
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#C8922A] hover:text-[#b07820] transition-colors flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
                {m.major && (
                  <p className="text-gray-500 text-xs">{m.major}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
 
    </main>
  );
}

const officers = [
  { name: "Leo Klemm",     role: "President",      major: "Agricultural Economics",          photo: "/people/leo-klemm.png",     linkedin: "https://www.linkedin.com/in/leonard-klemm/" },
  { name: "Jack Budinger", role: "Vice President", major: "Quantitative Business Economics", photo: "/people/jack-budinger.png", linkedin: "https://www.linkedin.com/in/jack-budinger-98366434a/" },
  { name: "John Swift",    role: "CTO",            major: "Computer Science",                photo: "/people/john-swift.jpg",    linkedin: "https://www.linkedin.com/in/john-m-swift" },
  { name: "Caleb Kuntz",   role: "Secretary",      major: "Biochemistry",                    photo: "/people/caleb-kuntz.png",   linkedin: "https://www.linkedin.com/in/caleb-kuntz-12a969349/" },
  { name: "Jack Fetters",  role: "Treasurer",      major: "Biological Engineering",          photo: "/people/jack-fetters.png",  linkedin: "https://www.linkedin.com/in/jack-fetters-24a8aa35a/" },
];

const members = [
  { name: "Ryan Kneller", major: "Finance",      photo: "", linkedin: "https://www.linkedin.com/in/ryan-kneller-5a12a9383/" }, 
];
