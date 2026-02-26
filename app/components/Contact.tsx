"use client"

export default function Contact() {

    return (
      <section className="py-10 px-6 text-center">
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
          <a
            href="https://www.linkedin.com/company/commodities-markets-analysis-at-purdue/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#C8922A] text-[#C8922A] font-medium hover:bg-[#C8922A] hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </section>
    )
}