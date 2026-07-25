import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04050d]">
      <div className="shell flex flex-col gap-5 py-7 text-xs text-[#747c94] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Youssef Charif Hamidi. Built with
          intention.
        </p>
        <a
          href="#top"
          className="inline-flex min-h-11 w-fit items-center gap-2 text-[#aeb5c8] hover:text-white"
        >
          Back to horizon <ArrowUp aria-hidden="true" size={15} />
        </a>
      </div>
    </footer>
  );
}
