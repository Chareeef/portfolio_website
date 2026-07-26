import { NextResponse, type NextRequest } from "next/server";
import { getPreferredLocale } from "@/lib/locale-preference";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const locale = getPreferredLocale(request.headers.get("accept-language"));

    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  const locale = pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-portfolio-locale", locale);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/", "/en/:path*", "/fr/:path*"],
};
