import { copy, type Locale } from "@/lib/i18n";
import { BackToTopButton } from "@/components/navigation/BackToTopButton";

export function Footer({ locale }: { locale: Locale }) {
  const content = copy[locale].footer;

  return (
    <footer className="relative border-t border-white/10 bg-[#04050d]">
      <div className="shell relative flex items-center justify-center py-4 text-center text-xs text-[#747c94]">
        <p className="max-w-[30rem]">
          © {new Date().getFullYear()} Youssef Charif Hamidi. {content.built}
        </p>
      </div>
      <BackToTopButton label={content.back} />
    </footer>
  );
}
