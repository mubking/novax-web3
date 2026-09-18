import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <DigitalAssetManagement />
      <OurFeatures />
      <OurServices />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* THE SERVICES HERO                                                   */
/* ------------------------------------------------------------------ */
function ServicesHero() {
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
            The <span className="text-accent">Services</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Our Ecosystem Is Designed To Support Everything Needed For Web3
            Growth From Everyday Users To Advanced Developers.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="absolute h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          {/* Export the wallet + safe render from Figma to public/services-hero.png */}
          <Image
            src="/services-hero.png"
            alt="Wallet and safe holding crypto assets"
            width={560}
            height={520}
            priority
            className="relative h-auto w-64 max-w-full sm:w-80 lg:w-[28rem]"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* DIGITAL ASSET MANAGEMENT                                            */
/* ------------------------------------------------------------------ */
function DigitalAssetManagement() {
  return (
    <section className="container-x py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Export the icon-cluster illustration from Figma to public/digital-asset.png */}
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src="/digital-asset.png"
            alt="Managing digital assets"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold uppercase leading-tight sm:text-3xl">
            Digital Asset Management
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              Your digital assets deserve the highest level of security and
              control.
            </p>
            <p>
              We provide tools and systems that help you store, track, and grow
              your crypto portfolio with confidence.
            </p>
          </div>

          <p className="mt-6 text-sm text-muted">Key features:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            <li>Secure crypto storage options</li>
            <li>Transaction tracking.</li>
            <li>Asset monitoring dashboards</li>
            <li>Wallet connection support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* OUR FEATURES                                                        */
/* ------------------------------------------------------------------ */
const features = [
  {
    title: "Safe and Secure",
    body: "From automated transactions to NFT minting and DeFi protocols, we build secure smart contracts tailored to your project needs.",
    icon: (
      <>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </>
    ),
  },
  {
    title: "Good Invesment",
    body: "Fully customized decentralized platforms with seamless wallet connections and high-performance architecture.",
    icon: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  },
  {
    title: "Integrated App",
    body: "Whether you want to build on Ethereum, Polygon, BNB Chain, Solana, or other chains — we handle the entire setup.",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
  },
  {
    title: "Multi Curency Support",
    body: "Integrating Web3 wallets such as MetaMask, WalletConnect, Trust Wallet, Coinbase Wallet for smooth user onboarding.",
    icon: (
      <>
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="M7 6h1v4" />
        <path d="m16.71 13.88.7.71-2.82 2.82" />
      </>
    ),
  },
];

function OurFeatures() {
  return (
    <section className="container-x py-20">
      <div className="text-center">
        <h2 className="eyebrow text-3xl sm:text-4xl">
          Our <span className="text-accent">Features</span>
        </h2>
        <p className="mt-3 text-sm text-muted">
          A Smarter, Faster, More Secure Blockchain
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-2xl border border-line bg-card p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line text-white/70">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {f.icon}
              </svg>
            </div>
            <h3 className="mt-5 font-display text-base font-bold uppercase text-white">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* OUR SERVICES (cards around the mascot)                             */
/* ------------------------------------------------------------------ */
const LOREM =
  "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute molit anim id est laborum sed to veniam nostrud quis exercition laboris.";

function OurServices() {
  return (
    <section className="container-x py-20">
      <div className="text-center">
        <h2 className="eyebrow text-3xl sm:text-4xl">
          Our <span className="text-accent">Services</span>
        </h2>
        <p className="mt-3 text-sm text-muted">
          Building a Universe of Decentralized Possibilities
        </p>
      </div>

      <div className="mt-12 grid items-center gap-6 lg:grid-cols-3">
        <div className="space-y-6">
          <Pillar title="Free Trial Account" />
          <Pillar title="Free Trial Account" />
        </div>

        {/* Export the bitcoin mascot from Figma to public/services-mascot.png */}
        <div className="relative mx-auto aspect-square w-full max-w-[18rem]">
          <Image
            src="/services-mascot.png"
            alt="Bitcoin mascot"
            fill
            sizes="(max-width: 1024px) 60vw, 25vw"
            className="object-contain"
          />
        </div>

        <div className="space-y-6">
          <Pillar title="Guide by Experts" />
          <Pillar title="24/7 Live Support" />
        </div>
      </div>
    </section>
  );
}

function Pillar({ title }: { title: string }) {
  return (
    <article className="rounded-2xl border border-accent/25 bg-card p-6 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center text-accent">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20a8 8 0 0 1 16 0" />
        </svg>
      </div>
      <h3 className="mt-3 font-display text-sm font-bold uppercase text-white">
        {title}
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-muted">{LOREM}</p>
    </article>
  );
}