"use client"

export default function Contact() {

    return (
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto flex flex-col gap-4 items-center">
          <h2 className="text-3xl font-bold">Interested in Joining?</h2>
          <p className="text-gray-600">
            CMAC is open to all Purdue students regardless of major. Come learn,
            compete, and connect.
          </p>
          <a
            href="mailto:CMACpurdue@outlook.com"
            className="px-6 py-2.5 rounded-full bg-[#C8922A] text-white font-medium hover:bg-[#b07820] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    )
}