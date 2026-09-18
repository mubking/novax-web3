import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function EcosystemPage() {
  return (
    <>
      <EcosystemHero />
      <Reveal>
        <Web3Integration />
      </Reveal>
      <Reveal>
        <InfoSplit
          image="/eco-wallet.png"
          imageAlt="Cards and coins in a wallet"
          imageLeft
          titleLead="Wallet"
        />
      </Reveal>
      <Reveal>
        <InfoSplit
          image="/eco-dex.png"
          imageAlt="Decentralized exchange network of tokens"
          titleLead="Decentralized Exchange"
          titleAccent="(DEX)"
        />
      </Reveal>
      <Reveal>
        <InfoSplit
          image="/eco-staking.png"
          imageAlt="Staking platform render"
          imageLeft
          titleLead="Staking Platform"
        />
      </Reveal>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* THE ECOSYSTEM HERO                                                  */
/* ------------------------------------------------------------------ */
function EcosystemHero() {
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
            The <span className="text-accent">Ecosystem</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Our Ecosystem Is Designed To Support Everything Needed For Web3
            Growth From Everyday Users To Advanced Developers.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="absolute h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          {/* Export the globe render from Figma to public/ecosystem-hero.png */}
          <Image
            src="/ecosystem-hero.png"
            alt="Globe wrapped in an orbiting network"
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
/* WEB3 INTEGRATION & CUSTOM BLOCKCHAIN DEVELOPMENT                    */
/* ------------------------------------------------------------------ */
function Web3Integration() {
  return (
    <section className="container-x py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        Services
      </p>
      <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold uppercase leading-tight sm:text-3xl">
        Web3 Integration &amp; Custom Blockchain Development
      </h2>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
        {/* Big feature image on the left */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface">
          <Image
            src="/eco-1.jpg"
            alt="Crypto growth chart"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>

        {/* Right side: two images side by side, copy underneath */}
        <div>
          <div className="flex items-start gap-4">
            <div className="relative aspect-square w-[58%] shrink-0 overflow-hidden rounded-xl bg-surface">
              <Image
                src="/eco-2.jpg"
                alt="Blockchain analytics dashboard"
                fill
                sizes="(max-width: 1024px) 60vw, 26vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square w-[34%] shrink-0 self-end overflow-hidden rounded-xl bg-surface">
              <Image
                src="/eco-3.jpg"
                alt="Data visualization on a pedestal"
                fill
                sizes="(max-width: 1024px) 34vw, 15vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-6 max-w-sm space-y-4 text-sm leading-relaxed text-muted">
            <p>
              We provide structured systems that allow you to confidently track,
              manage, and grow your crypto investments.
            </p>
            <p>
              Full visibility and safety over your blockchain assets, supported
              by smart, data-driven insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SHARED NOVAX STORY (repeated across Wallet / DEX sections)         */
/* ------------------------------------------------------------------ */
function NovaxStory() {
  return (
    <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
      <p>
        The Digital World Is Evolving Faster Than Institutions Can Keep Up.
        Payments Remain Slow And Expensive, Decentralized Technology Is Difficult
        To Adopt, And Innovation Is Trapped Behind Complexity.
      </p>
      <p>NovaX Was Created To Change That.</p>
      <p>
        We Are Creating A Blockchain Ecosystem That Brings Together Speed,
        Usability, Transparency, And Security, All In One Place. Whether
        You&apos;re A Developer Building The Next Big Decentralized App, An
        Investor Looking For Meaningful Opportunities, Or A User Seeking Freedom
        Over Digital Finance, NovaX Was Built For You.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* REUSABLE IMAGE + TEXT SPLIT (Wallet, DEX, …)                       */
/* ------------------------------------------------------------------ */
function InfoSplit({
  image,
  imageAlt,
  titleLead,
  titleAccent,
  imageLeft = false,
}: {
  image: string;
  imageAlt: string;
  titleLead: string;
  titleAccent?: string;
  imageLeft?: boolean;
}) {
  const media = (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );

  const copy = (
    <div>
      <h2 className="eyebrow text-2xl sm:text-3xl">
        {titleLead}
        {titleAccent && (
          <>
            {" "}
            <span className="text-accent">{titleAccent}</span>
          </>
        )}
      </h2>
      <p className="mt-2 text-sm text-muted">
        A Smarter, Faster, More Secure Blockchain
      </p>
      <NovaxStory />
      <Link href="/contact" className="btn-accent mt-8">
        Contact Us
      </Link>
    </div>
  );

  return (
    <section className="container-x py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {imageLeft ? (
          <>
            {media}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {media}
          </>
        )}
      </div>
    </section>
  );
}