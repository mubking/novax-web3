import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Products />
      <Testimonials />
      <CallToAction />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-bg">
      {/* Textured backdrop — darkened with multiply so the scale pattern stays visible */}
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
      {/* Edge darkening + fade into the next section */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(130% 90% at 50% 30%, transparent 45%, rgba(11,9,12,0.6) 100%), linear-gradient(180deg, transparent 55%, #0b090c 100%)",
        }}
        aria-hidden
      />
      <div className="container-x grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
        {/* Copy */}
        <div>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.05] sm:text-5xl xl:text-6xl">
            Discover the <span className="text-accent">Power of</span>{" "}
            <span className="text-accent">Web3</span> and Transform Your Digital
            Life
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Manage, trade, and grow your assets in a secure decentralized
            ecosystem.
          </p>
          <Link href="/contact" className="btn-accent mt-8">
            Leave a Request
          </Link>
        </div>

        {/* Coins */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <Image
            src="/hero-coins.png"
            alt="Bitcoin, Ethereum, Solana and USDC tokens"
            width={426}
            height={493}
            priority
            className="animate-float relative h-auto w-64 max-w-full sm:w-80 lg:w-[26rem]"
          />
        </div>
      </div>

      {/* Slider dots (decorative) */}
      <div className="flex justify-center gap-2 pb-10">
        <span className="h-2 w-6 rounded-full bg-accent" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION HEADING (reused)                                            */
/* ------------------------------------------------------------------ */
function SectionHeading({
  lead,
  highlight,
  subtitle,
}: {
  lead: string;
  highlight: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="eyebrow text-3xl sm:text-4xl">
        {lead} <span className="text-accent">{highlight}</span>
      </h2>
      <p className="mt-3 text-sm text-muted">{subtitle}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FEATURES                                                            */
/* ------------------------------------------------------------------ */
const features = [
  {
    accent: "NovaX Smart",
    rest: "Layer",
    body: "Allows Developers To Build DeFi Apps, NFT Marketplaces, Token Systems, And Metaverse Infrastructures.",
    icon: (
      <>
        <path d="m12 2 9 4.9-9 4.9-9-4.9 9-4.9Z" />
        <path d="m3 12 9 4.9 9-4.9" />
        <path d="m3 16.5 9 4.9 9-4.9" />
      </>
    ),
  },
  {
    accent: "Cross-Chain",
    rest: "Bridges",
    body: "From PLA And PETG To Flexible And Industrial-Grade Resins – We Work With A Variety Of Materials To Suit Your Project Needs.",
    icon: (
      <>
        <circle cx="6" cy="19" r="2.6" />
        <circle cx="18" cy="5" r="2.6" />
        <path d="M8.6 19H15.5a3.5 3.5 0 0 0 0-7h-7a3.5 3.5 0 0 1 0-7H15.4" />
      </>
    ),
  },
  {
    accent: "Ultra-Low Energy",
    rest: "Consumption",
    body: "Need It Fast? Our Streamlined Process Ensures Quick Delivery Without Sacrificing Quality.",
    icon: <path d="M13 2 4 13.5h6.5L9 22l9-11.5h-6.5L13 2Z" />,
  },
  {
    accent: "Tools",
    rest: "For Innovators",
    body: "Our Experienced Team Will Guide You From Idea To Object — We Help With Design, File Preparation, And Choosing The Best Printing Method.",
    icon: (
      <>
        <path d="M13.2 7.8a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.6-3.6a5.5 5.5 0 0 1-7.3 7.3l-6 6a2 2 0 0 1-2.8-2.8l6-6a5.5 5.5 0 0 1 7.3-7.3z" />
        <path d="M3 3l2.5.8L7 7 5 9 1.8 7.5 1 5 3 3Z" />
        <path d="M6 8.5 17 19.5" />
      </>
    ),
  },
];

function Features() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        lead="Our"
        highlight="Features"
        subtitle="A Smarter, Faster, More Secure Blockchain"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <article
            key={f.accent}
            className="rounded-xl border border-line bg-card p-6 transition-colors hover:border-accent/40"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
              aria-hidden
            >
              {f.icon}
            </svg>
            <h3 className="mt-6 font-display text-base font-semibold">
              <span className="text-accent">{f.accent}</span>{" "}
              <span className="text-white">{f.rest}</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */
const services = [
  {
    no: "01",
    title: "NovaX Smart Contracts Suite",
    body: "Build, deploy, and automate smart contracts with enterprise-grade security.",
    image: "/smart-contracts.png",
  },
  {
    no: "02",
    title: "NovaX Cross-Chain Bridge",
    body: "Our bridge connects Ethereum, Binance Smart Chain, Polygon, and more — enabling true interoperability without complexity.",
    image: "/cross-chain.png",
  },
  {
    no: "03",
    title: "NovaX Developer Cloud",
    body: "A full suite of tools, APIs, SDKs, and sandbox environments designed for builders.",
    image: "/developer-cloud.png",
  },
  {
    no: "04",
    title: "NovaX Staking & Yield Engine",
    body: "Stake NXC to receive consistent yields, governance rights, and access to ecosystem-exclusive perks.",
    image: "/staking.png",
  },
];

function Services() {
  return (
    <section className="container-x py-20">
      <div className="text-center md:text-left">
        <h2 className="eyebrow text-3xl sm:text-4xl">
          Our <span className="text-accent">Services</span>
        </h2>
        <p className="mt-3 text-sm text-muted">
          Building a Universe of Decentralized Possibilities
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.no}
            className="rounded-2xl border border-line bg-card p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-lg font-semibold text-white">
                {s.title}
              </h3>
              <span className="font-display text-2xl font-extrabold text-accent">
                {s.no}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            {/* Real image — export each from Figma into public/services/ */}
            <div className="relative mt-5 aspect-[510/367] overflow-hidden rounded-lg bg-surface">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* POPULAR PRODUCTS                                                    */
/* ------------------------------------------------------------------ */
const products = [
  {
    title: "NovaX Wallet",
    body: "A Secure, Non-Custodial Wallet Designed For Storing, Staking, Swapping, And Managing NXC And Other Supported Assets.",
    price: "Free",
    note: "only takes network fees.",
    discount: true,
    image: "/wallet.png",
  },
  {
    title: "NovaX Pay",
    body: "A Global Crypto Payment Solution That Enables Users To Pay Instantly With NXC. For Merchants, Freelancers & Digital Platforms,",
    price: "$90.00",
    note: "$120.00",
    discount: true,
    image: "/pay.png",
  },
  {
    title: "NovaX Staking Hub",
    body: "Stake NXC And Earn Yield Through Validated Node Operations. Simple Interface, Secure Process, Instant Rewards Tracking.",
    price: "$83.00",
    note: null,
    discount: false,
    image: "/staking-hub.png",
  },
];

function Products() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        lead="Popular"
        highlight="Products"
        subtitle="Top features, tools, or offerings within the ecosystem"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.title}
            className="overflow-hidden rounded-2xl border border-line bg-card p-4"
          >
            {/* Product image — export from Figma into public/products/ */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              {p.discount && (
                <span className="absolute right-3 top-3 rounded-md bg-black/70 px-2.5 py-1 text-xs font-semibold text-amber-400">
                  Discount
                </span>
              )}
            </div>

            <div className="px-2 pb-2 pt-5">
              <h3 className="font-display text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-2xl font-bold text-white">
                  {p.price}
                </span>
                {p.note && (
                  <span className="text-sm text-muted line-through">
                    {p.note}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="#"
          className="rounded-md border border-line px-6 py-3 text-sm text-white transition-colors hover:border-accent hover:text-accent"
        >
          See More
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TESTIMONIALS                                                        */
/* ------------------------------------------------------------------ */
const testimonials = [
  { stars: 5, text: "Impressive detail on every model. The online shop is easy to use, and the team is super helpful with custom orders.", name: "Thomas W. - Düsseldorf" },
  { stars: 3, text: "Absolutely love the anime-style figure I ordered! The details are amazing, and the paint job is top-notch. Will definitely come back for more!", name: "Julia M. - Berlin" },
  { stars: 5, text: "Great service and fast delivery. My custom miniatures turned out even better than I expected. Printorium knows how to bring ideas to life.", name: "David K. - Hamburg" },
  { stars: 4, text: "High-quality prints, solid materials, and a very responsive team. The crab monster is now the centerpiece of our game nights!", name: "Lena S. - Munich" },
  { stars: 5, text: "I'm impressed with the quality of the painted models. The color work really brings the creature to life!", name: "Markus E. - Bremen" },
  { stars: 5, text: "Excellent service from start to finish. The team helped me choose the right material and finish for my model.", name: "Nina B. - Leipzig" },
  { stars: 4, text: "I ordered a custom mechanical part and it fits perfectly. Good communication and very precise printing.", name: "Felix H. - Stuttgart" },
  { stars: 5, text: "The orc figurine is stunning! Great finish and perfect size for my collection. Thank you, Printorium!", name: "Sophie R. - Köln" },
];

function Testimonials() {
  return (
    <section className="container-x py-20">
      <h2 className="eyebrow text-center text-3xl sm:text-4xl">
        What Our <span className="text-accent">Customers Say</span>
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-xl border border-line bg-card p-6"
          >
            <Stars count={t.stars} />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-white">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="#"
          className="rounded-md border border-accent/60 px-6 py-3 text-sm text-white transition-colors hover:bg-accent"
        >
          Leave Feedback
        </Link>
      </div>
    </section>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "#f5b400" : "#3a3342"}
          aria-hidden
        >
          <path d="m12 17.3-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z" />
        </svg>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CALL TO ACTION lives in components/CallToAction.tsx (shared)        */
/* ------------------------------------------------------------------ */