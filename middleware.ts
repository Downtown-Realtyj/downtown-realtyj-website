import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow Next.js internals and common static files to be served.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/.well-known')
  ) {
    return NextResponse.next();
  }

  const isGet = req.method === 'GET' || req.method === 'HEAD';
  const status = isGet ? 400 : 500;

  const title =
    status === 400 ? 'Site Disabled — 400 Bad Request' : 'Site Disabled — 500 Internal Server Error';
  const message =
    status === 400
      ? 'This site is temporarily disabled and returns a 400 response for client requests.'
      : 'This site is temporarily disabled and returns a 500 response for non-GET requests.';

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${title}</title>
    <style>
      :root { color-scheme: light dark }
      body { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background: #f8fafc; color: #0f172a; margin: 0 }
      main { max-width: 720px; margin: 6rem auto; background: #fff; padding: 2rem; border-radius: 12px; box-shadow: 0 10px 30px rgba(2,6,23,0.08) }
      h1 { margin: 0 0 0.5rem; font-size: 1.5rem }
      p { margin: 0.5rem 0; color: #475569 }
      footer { margin-top: 1.25rem; font-size: 0.9rem; color: #64748b }
    </style>
  </head>
  <body>
    <main>
      <h1>${title}</h1>
      <p>${message}</p>
      <footer>If you need access, contact your site administrator or remove this middleware.</footer>
    </main>
  </body>
</html>`;

  return new Response(html, { status, headers: { 'Content-Type': 'text/html' } });
}

// Apply middleware to all routes except Next internals and well-known paths.
export const config = {
  matcher: ['/((?!.well-known|_next/static|_next/image|favicon.ico).*)'],
};
