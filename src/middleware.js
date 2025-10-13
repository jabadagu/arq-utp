import { NextResponse } from "next/server";
import { i18n } from "./i18n-config";
import { jwtDecode } from "jwt-decode";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales = i18n.locales;
  const languages = new Negotiator({
    headers: negotiatorHeaders,
  }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }

  // Protect /{locale}/apps/* routes: require valid (non-expired) JWT token in cookie named 'token'
  try {
    // build regex to match localized protected routes, e.g. /en/apps/ and /en/members/
    const appsRegex = new RegExp(
      `^/(${i18n.locales.join("|")})/(apps|members|settings)/`
    );
    if (appsRegex.test(pathname)) {
      const cookieHeader = request.headers.get("cookie") || "";
      const match = cookieHeader.match(/(?:^|; )token=([^;]+)/);
      const token = match ? match[1] : null;

      // use jwt-decode library to parse payload
      const decodeJwtPayload = (t) => {
        try {
          return jwtDecode(t);
        } catch (e) {
          return null;
        }
      };

      if (!token) {
        // no token -> redirect to localized sign-in
        const locale = pathname.split("/")[1] || i18n.defaultLocale;
        return NextResponse.redirect(
          new URL(`/${locale}/authentication/sign-in/`, request.url)
        );
      }

      const payload = decodeJwtPayload(token);
      const now = Math.floor(Date.now() / 1000);
      if (!payload || (payload.exp && payload.exp <= now)) {
        const locale = pathname.split("/")[1] || i18n.defaultLocale;
        return NextResponse.redirect(
          new URL(`/${locale}/authentication/sign-in/`, request.url)
        );
      }
    }
  } catch (e) {
    // if anything fails, do not block routing here (fail open) but log for debugging
    // console.error could be used, but avoid in middleware; return nothing
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|images|fonts|_next/image|favicon.ico).*)"],
};
