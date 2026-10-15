import { Wrench } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: [
      "Find Services",
      "Find Providers",
      "Become a Provider",
    ],
  },
  {
    title: "Company",
    links: ["About us", "How it works", "Contact"],
  },
  {
    title: "Support",
    links: ["Help Center", "Safety", "Service tracking"],
  },
  {
    title: "Legal",
    links: [
      "Privacy policy",
      "Terms of service",
      "Accessibility",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:px-8">

        {/* Brand and description */}
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
              <Wrench size={18} />
            </div>

            <span className="text-[19px] font-bold tracking-[-0.04em] text-white">
              Service
              <span className="text-blue-500">Hub</span>
            </span>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            The simpler way to find trusted local professionals
            for every job.
          </p>
        </div>

        {/* Footer link columns */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold text-white">
              {section.title}
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {section.links.map((link) => (
                <a
                  key={link}
                  href="#top"
                  className="text-sm transition-colors hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>
            © 2026 ServiceHub. All rights reserved.
          </span>

          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-teal-400" />
            Built for better service experiences
          </span>
        </div>
      </div>
    </footer>
  );
}
