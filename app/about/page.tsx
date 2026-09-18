import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyNovax />
      <TeamValues />
      <TeamGrid />
      <CallToAction />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* ABOUT US HERO                                                       */
/* ------------------------------------------------------------------ */
function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-bg">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#555060",
          backgroundBlendMode: "multiply",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(130% 90% at 50% 30%, transparent 45%, rgba(11,9,12,0.6) 100%), linear-gradient(180deg, transparent 55%, #0b090c 100%)",
        }}
        aria-hidden
      />

      <div className="container-x grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.05] sm:text-5xl xl:text-6xl">
            About <span className="text-accent">Us</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            We Are Building An Infrastructure That Is Not Only Fast And Scalable,
            But Intelligent, Reliable, And Built For Real-World Adoption.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="absolute h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          {/* Export the VR-avatar render from Figma to public/about-hero.png */}
          <Image
            src="/about-hero.png"
            alt="Person wearing a VR headset"
            width={520}
            height={520}
            priority
            className="relative h-auto w-64 max-w-full sm:w-80 lg:w-[26rem]"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* WHY NOVAX EXISTS                                                    */
/* ------------------------------------------------------------------ */
function WhyNovax() {
  return (
    <section className="container-x py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Export the padlock render from Figma to public/why-novax.png */}
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface">
          <Image
            src="/staking.png"
            alt="Padlock surrounded by crypto tokens"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="eyebrow text-2xl sm:text-3xl">
            Why <span className="text-accent">NovaX</span> Exists
          </h2>
          <p className="mt-2 text-sm text-muted">
            A Smarter, Faster, More Secure Blockchain
          </p>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              The Digital World Is Evolving Faster Than Institutions Can Keep Up.
              Payments Remain Slow And Expensive, Decentralized Technology Is
              Difficult To Adopt, And Innovation Is Trapped Behind Complexity.
            </p>
            <p>NovaX Was Created To Change That.</p>
            <p>
              We Are Creating A Blockchain Ecosystem That Brings Together Speed,
              Usability, Transparency, And Security, All In One Place. Whether
              You&apos;re A Developer Building The Next Big Decentralized App, An
              Investor Looking For Meaningful Opportunities, Or A User Seeking
              Freedom Over Digital Finance, NovaX Was Built For You.
            </p>
          </div>

          <Link href="/contact" className="btn-accent mt-8">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SHARED "OUR TEAM" HEADING                                           */
/* ------------------------------------------------------------------ */
function TeamHeading() {
  return (
    <div className="text-center">
      <h2 className="eyebrow text-3xl sm:text-4xl">
        Our <span className="text-accent">Team</span>
      </h2>
      <p className="mt-3 text-sm text-muted">
        Top features, tools, or offerings within the ecosystem
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* OUR TEAM (values + feature photo)                                  */
/* ------------------------------------------------------------------ */
const values = [
  {
    title: "We Simplify Web3",
    body: "With lots of unique blocks, you can easily build a page without coding.",
  },
  {
    title: "We Empower You to Own Your Digital Life",
    body: "Your assets, identity, transactions, and data all belong to you.",
  },
  {
    title: "We Build a Future Open to Everyone",
    body: "Our mission is to create a trusted, community-driven ecosystem.",
  },
];

function TeamValues() {
  return (
    <section className="container-x py-20">
      <TeamHeading />

      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        <ol className="space-y-8">
          {values.map((v, i) => (
            <li key={v.title} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-sm font-bold uppercase text-white">
                  {v.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {v.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="relative">
          {/* Export the feature photo from Figma to public/team-feature.png */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface">
            <Image
              src="/team-feature.png"
              alt="NovaX team member"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Floating invitation card */}
          <div className="absolute -bottom-[-100px] left-[-20px] flex items-center gap-3 rounded-xl border border-line bg-card/95 px-4 py-3 backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/20 text-accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <div>
              <p className="text-xs text-muted">New Invitation!</p>
              <p className="text-sm font-semibold text-white">
                INTERVIEW INVITATION AT NOVAX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* OUR TEAM (member grid)                                             */
/* ------------------------------------------------------------------ */
const team = [
  { name: "", role: "", image: "/card.png" },
  { name: "", role: "", image: "/card (1).png" },
  { name: "", role: "", image: "/card (2).png" },
  { name: "", role: "", image: "/card (3).png" },
//   { name: "James Carter", role: "3D Artist", image: "/card (4).png" },
];

function TeamGrid() {
  return (
    <section className="container-x py-20">
      <TeamHeading />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m, i) => (
          <figure
            key={i}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface"
          >
            {/* Export each member photo from Figma to public/team-1.png … team-4.png */}
            <Image
              src={m.image}
              alt={m.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
            <figcaption
              className="absolute inset-x-0 bottom-0 p-4"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
              }}
            >
              <p className="text-sm font-semibold text-white">{m.name}</p>
              <p className="text-xs text-white/70">{m.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/contact" className="btn-accent">
          Contact Us
        </Link>
      </div>
    </section>
  );
}