import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/.well-known")
  ) {
    return NextResponse.next();
  }

  const isGet = req.method === "GET" || req.method === "HEAD";
  const status = isGet ? 400 : 500;

  const title =
    status === 400
      ? "Site is temporarily down — 400 Bad Request"
      : "Site is temporarily down — 500 Internal Server Error";

  const message =
    status === 400
      ? "This site is temporarily down and returns a 400 response for client requests."
      : "This site is temporarily down and returns a 500 response for non-GET requests.";

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${title}</title>
    <style>
      body { font-family: system-ui; background: #f8fafc; color: #0f172a; margin: 0; }
      main { max-width: 720px; margin: 6rem auto; background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
      h1 { margin-bottom: 0.5rem; }
      p { color: #475569; }
    </style>
  </head>
  <body>
    <main>
      <h1>${title}</h1>
      <p>${message}</p>
    </main>
  </body>
</html>`;

  return new Response(html, {
    status,
    headers: { "Content-Type": "text/html" },
  });
}

export const config = {
  matcher: ["/((?!.well-known|_next/static|_next/image|favicon.ico).*)"],
};
