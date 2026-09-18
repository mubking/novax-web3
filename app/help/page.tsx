import Image from "next/image";

export default function HelpPage() {
  return (
    <>
      <HelpHero />
      <HelpFeatures />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HERO — HOW NOVAX HELPS YOU SCALE FASTER                            */
/* ------------------------------------------------------------------ */
function HelpHero() {
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
            "radial-gradient(130% 90% at 50% 20%, transparent 45%, rgba(11,9,12,0.6) 100%), linear-gradient(180deg, transparent 60%, #0b090c 100%)",
        }}
        aria-hidden
      />

      <div className="container-x py-20 text-center lg:py-24">
        <h1 className="mx-auto max-w-4xl font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl xl:text-5xl">
          How NovaX Helps You Scale Faster
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          Our Ecosystem Is Designed To Support Everything Needed For Web3 Growth
          From Everyday Users To Advanced Developers.
        </p>

        {/* Export the banner from Figma to public/help-hero.png */}
        <div className="relative mt-12 aspect-[3/1] overflow-hidden rounded-2xl bg-surface">
          <Image
            src="/help-hero.jpg"
            alt="Hand reaching toward a glowing dollar network"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* OUR FEATURES (long-form article)                                   */
/* ------------------------------------------------------------------ */
const p1 =
  "NovaX is built for founders, developers, creators, and businesses who are ready to grow beyond limits. At its core, NovaX removes the friction that slows digital adoption — high fees, slow transactions, limited scalability, and rigid infrastructure. By offering lightning-fast processing and low transaction costs, NovaX allows you to launch, transact, and expand without worrying about congestion or prohibitive overhead.";

const p2 =
  "Beyond speed, NovaX gives you a solid foundation for building and deploying decentralized products. Whether you're launching a token, creating a Web3 application, or integrating blockchain into your operations, NovaX provides developer-friendly tools, APIs, and smart contract capabilities that reduce complexity and improve time-to-market. You spend less time managing infrastructure and more time building what matters.";

const quote =
  "NovaX exists to reset the pace of progress. We believe that innovation should never be slowed by outdated systems, excessive fees, or technical barriers. Our mission is to give builders, businesses, and creators an ecosystem where scaling feels natural — not forced. NovaX is not just a blockchain; it's a launchpad for the future, where speed, security, and sovereignty unite to unlock what's next.";

const p3 =
  "Most importantly, NovaX is not just a blockchain — it's an ecosystem. From DeFi tools to NFT infrastructure, scaling is not limited to transactions alone. NovaX helps you build an entire digital economy around your product or idea. Whether you're reaching new users, launching global services, or monetizing digital assets, NovaX gives you the flexibility and power to expand without limits.";

const speed = {
  heading: "Speed That Matches Your Ambition",
  intro:
    "NovaX processes thousands of transactions per second without congestion.",
  bullets: [
    "Enhances user experience with instant confirmations",
    "Supports high-volume apps (DeFi, games, marketplaces)",
    "Prevents network slowdowns during traffic surges",
    "When speed increases, adoption follows.",
  ],
};

const cost = {
  heading: "Cost-Efficient Everywhere",
  intro: "No excessive gas fees. No scalability tax.",
  bullets: [
    "Lower operating cost for developers",
    "Cheap micro-transactions unlock new business models",
    "Users trade and build without financial barriers",
  ],
  closing: "Low cost means global access — and global reach.",
};

function HelpFeatures() {
  return (
    <section className="container-x py-20">
      <h2 className="eyebrow text-3xl sm:text-4xl">
        Our <span className="text-accent">Features</span>
      </h2>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
        <p>{p1}</p>
        <p>{p2}</p>
      </div>

      {/* Export from Figma to public/help-wallet.png */}
      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-surface">
        <Image
          src="/help-wallet.jpg"
          alt="Wallet with coins flowing out"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <blockquote className="mt-10 border-l-2 border-accent pl-6 text-sm leading-relaxed text-muted">
        “{quote}”
        <footer className="mt-4 text-sm text-accent">-Enigma Philip</footer>
      </blockquote>

      <p className="mt-10 text-sm leading-relaxed text-muted">{p3}</p>

      {/* Export from Figma to public/help-ecosystem.png */}
      <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl bg-surface">
        <Image
          src="/help-ecosystem.jpg"
          alt="Circular blockchain ecosystem visualization"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Subsection
        heading={speed.heading}
        intro={speed.intro}
        bullets={speed.bullets}
      />
      <Subsection
        heading={cost.heading}
        intro={cost.intro}
        bullets={cost.bullets}
        closing={cost.closing}
      />
    </section>
  );
}

function Subsection({
  heading,
  intro,
  bullets,
  closing,
}: {
  heading: string;
  intro: string;
  bullets: string[];
  closing?: string;
}) {
  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold text-white">{heading}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{intro}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      {closing && (
        <p className="mt-3 text-sm leading-relaxed text-muted">{closing}</p>
      )}
    </div>
  );
}