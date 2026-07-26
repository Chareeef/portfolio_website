import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getPreferredLocale } from "@/lib/locale-preference";

export default async function LanguageRedirect() {
  const locale = getPreferredLocale(
    (await headers()).get("accept-language"),
  );

  redirect(`/${locale}`);
}
