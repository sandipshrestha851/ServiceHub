import { ArrowRight } from "lucide-react";

export default function ProviderBanner() {
  return (
    <section className="max-w-384 mt-20 mx-40">
      <div className="flex min-h-53 flex-col items-start justify-between gap-6 rounded-[30px] bg-[#1E5BFF] px-7 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:px-13 lg:py-10">
        {/* Left content */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium">
            For skilled professionals
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Turn your skills into opportunities.
          </h2>

          <p className="text-sm leading-6 text-blue-50">
            Join ServiceHub and connect with customers looking for your
            services.
          </p>
        </div>

        {/* Call-to-action button */}
        <a
          href="/become-provider"
          className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-[#1749E8] px-4.5 py-3 text-sm font-semibold transition-colors hover:bg-[#123CC5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Become a provider
          <ArrowRight size={17} strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}
