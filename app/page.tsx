const focusAreas = [
  {
    title: "AI Systems",
    description: "Intelligent agents, automation and AI-powered workflows.",
    icon: "✦",
  },
  {
    title: "Data Intelligence",
    description: "Analytics, BI and data systems that drive decisions.",
    icon: "⌁",
  },
  {
    title: "Experiments",
    description: "Ideas that challenge the conventional.",
    icon: "◇",
  },
  {
    title: "Engineering",
    description: "Products, platforms and scalable infrastructure.",
    icon: "</>",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-white selection:bg-lime-400 selection:text-black">
      {/* NAVIGATION */}
      <nav className="flex items-center justify-between border-b border-white/[0.08] px-6 py-6 md:px-12">
        <a
          href="/"
          className="text-xs font-semibold tracking-[0.38em] text-lime-400 transition hover:text-white"
        >
          UNORTHODOXED
        </a>

        <div className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.2em] text-white/50 md:flex">
          <a href="#work" className="transition hover:text-white">
            Work
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#thoughts" className="transition hover:text-white">
            Thoughts
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden border-b border-white/[0.08] px-6 py-24 md:px-12">
        {/* subtle background U */}
        <div className="pointer-events-none absolute right-[8%] top-1/2 hidden -translate-y-1/2 text-[25rem] font-thin leading-none text-lime-400/[0.035] md:block">
          U
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              SRK / AI · DATA · SYSTEMS
            </span>
          </div>

          <h1 className="text-6xl font-medium tracking-[-0.055em] md:text-8xl lg:text-[7.5rem]">
            Srikanta Sahu
          </h1>

          <div className="mt-7 space-y-1 text-2xl font-light tracking-[-0.025em] text-white/60 md:text-4xl">
            <p>Building AI Systems.</p>
            <p className="text-white/30">Solving Business Problems.</p>
          </div>

          <a
            href="#work"
            className="mt-12 inline-flex items-center border border-lime-400/60 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-lime-400 hover:text-black"
          >
            Explore My Work
            <span className="ml-8 text-lg">→</span>
          </a>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="border-b border-white/[0.08] px-6 py-20 text-center md:px-12">
        <p className="text-xs font-medium uppercase tracking-[0.45em] text-white/60">
          UNORTHODOX THINKING. PRACTICAL IMPACT.
        </p>

        <div className="mx-auto mt-6 h-px w-8 bg-lime-400" />
      </section>

      {/* WORK */}
      <section id="work" className="border-b border-white/[0.08] px-6 py-24 md:px-12">
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              What I Build
            </span>
          </div>

          <h2 className="text-3xl font-light leading-tight tracking-[-0.03em] text-white/90 md:text-5xl">
            Turning ideas into systems
            <br />
            that create real impact.
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <a
              href="#"
              key={area.title}
              className="group flex min-h-[290px] flex-col justify-between border border-white/[0.1] p-7 transition duration-300 hover:border-lime-400/40 hover:bg-white/[0.025]"
            >
              <div className="text-2xl font-light text-lime-400/80 transition group-hover:text-lime-400">
                {area.icon}
              </div>

              <div>
                <h3 className="text-lg font-medium">{area.title}</h3>

                <p className="mt-4 text-sm leading-6 text-white/35">
                  {area.description}
                </p>

                <div className="mt-8 text-sm text-white/30 transition group-hover:text-lime-400">
                  →
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-b border-white/[0.08] px-6 py-24 md:px-12"
      >
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                About Me
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              I operate at the intersection of
              <span className="text-white/35"> AI, data and business.</span>
            </h2>

            <p className="mt-8 max-w-lg text-sm leading-7 text-white/40">
              I build systems that solve real problems, automate complexity
              and create leverage for people and organizations.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block border-b border-lime-400/50 pb-2 text-[10px] uppercase tracking-[0.3em] text-white/70 transition hover:text-lime-400"
            >
              Know More
            </a>
          </div>

          {/* Minimal U / AI / Data / Business visual */}
          <div className="relative mx-auto flex h-[360px] w-[360px] items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full border border-white/[0.06]" />
            <div className="absolute h-52 w-52 rounded-full border border-white/[0.08]" />
            <div className="absolute h-32 w-32 rounded-full border border-white/[0.1]" />

            <div className="absolute left-1/2 top-8 h-2 w-2 -translate-x-1/2 rounded-full bg-lime-400" />
            <div className="absolute bottom-16 left-14 h-2 w-2 rounded-full bg-lime-400" />
            <div className="absolute bottom-16 right-14 h-2 w-2 rounded-full bg-lime-400" />

            <div className="absolute left-1/2 top-2 text-[9px] uppercase tracking-[0.3em] text-white/30">
              AI
            </div>

            <div className="absolute bottom-5 left-8 text-[9px] uppercase tracking-[0.3em] text-white/30">
              DATA
            </div>

            <div className="absolute bottom-5 right-4 text-[9px] uppercase tracking-[0.3em] text-white/30">
              BUSINESS
            </div>

            <span className="text-5xl font-light text-lime-400/80">U</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-28 md:px-12">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-white/30">
              Contact
            </p>

            <h2 className="text-5xl font-light tracking-[-0.05em] md:text-8xl">
              Let&apos;s build
              <br />
              <span className="text-white/30">something.</span>
            </h2>
          </div>

          <a
            href="mailto:srikantasahuatb@gmail.com"
            className="w-fit border border-white/20 px-7 py-4 text-[10px] uppercase tracking-[0.25em] transition hover:border-lime-400 hover:text-lime-400"
          >
            Get in touch →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col justify-between gap-5 border-t border-white/[0.08] px-6 py-7 text-[10px] uppercase tracking-[0.25em] text-white/25 md:flex-row md:px-12">
        <span>UNORTHODOXED © 2026</span>
        <span>Built by Srikanta Sahu</span>
      </footer>
    </main>
  );
}