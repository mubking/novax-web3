import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-8 py-14 sm:px-12">
        <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="eyebrow text-3xl sm:text-4xl">
              Ready to <span className="text-accent">Bring Your Idea</span> to
              Life?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
              Start your project with us today —{" "}
              <span className="text-accent">
                free consultation, endless inspiration.
              </span>
            </p>
            <Link href="/contact" className="btn-accent mt-8">
              Leave a Request
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/CTA.png"
              alt="Money bag, stacked coins and a card"
              width={471}
              height={441}
              className="h-auto w-56 max-w-full sm:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}