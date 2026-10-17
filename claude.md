# Downtown Realtyj Website — Claude Context

## Project overview

This is the public website for Downtown Realtyj, a real-estate and construction company based in Patna, Bihar. The site uses Next.js App Router and presents the company, its services, contact details, and lead-capture forms.

When changing the UI, preserve the existing brand character: premium, polished, property-focused, and responsive. Don’t assume a route or feature exists just because a link points to it.

## Technology

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4, imported in [`src/app/globals.css`](src/app/globals.css)
- `next-intl` for message loading
- `lucide-react` for icons
- `next/image` for local and remote images
- `pnpm` is the repository’s package manager (`pnpm-lock.yaml` is present)

Useful commands:

- `pnpm dev` — run the development server
- `pnpm lint` — run ESLint
- `pnpm build` — build the application

There is no test script currently defined in [`package.json`](package.json).

## Application structure

- [`src/app/layout.tsx`](src/app/layout.tsx) — root layout, metadata, fonts, internationalization provider, shared navigation and footer
- [`src/app/page.tsx`](src/app/page.tsx) — home page composition
- [`src/app/about/page.tsx`](src/app/about/page.tsx) — company story, mission, and vision
- [`src/app/contact/page.tsx`](src/app/contact/page.tsx) — contact page
- [`src/app/privacy-policy/page.tsx`](src/app/privacy-policy/page.tsx) — privacy policy
- [`src/components/navbar/`](src/components/navbar/) — shared navigation and navigation links
- [`src/components/footer/`](src/components/footer/) — shared footer and footer data
- [`src/components/Hero.tsx`](src/components/Hero.tsx), [`src/components/Vision.tsx`](src/components/Vision.tsx), [`src/components/InterestForm.tsx`](src/components/InterestForm.tsx) — home-page sections
- [`src/components/contact-us/`](src/components/contact-us/) — contact form
- [`src/components/MapBox.tsx`](src/components/MapBox.tsx) — lazily loaded embedded office map
- [`src/utils/`](src/utils/) — shared constants, form validation, and structured-data helpers
- [`messages/en.json`](messages/en.json) and [`messages/hi.json`](messages/hi.json) — English and Hindi message catalogs

The current app routes include `/`, `/about`, `/contact`, and `/privacy-policy`. Some components link to `/projects`, but there is no projects route in the current `src/app` tree. Check the current route structure before adding links or treating that page as implemented.

## Styling and design system

- Global CSS variables and Tailwind theme mappings live in [`src/app/globals.css`](src/app/globals.css).
- The established brand colors are gold (`#C9A84C`), pale gold (`#F5E6C8`), and midnight navy (`#0a0f1e`). Reuse the existing `brand`, `gold`, and `midnight` tokens where appropriate rather than introducing near-duplicates.
- Tailwind breakpoints, font-size extensions, and additional color values are also declared in [`tailwind.config.ts`](tailwind.config.ts). Check both the CSS theme and Tailwind configuration when changing shared colors or typography.
- The current visual language uses generous spacing, large headings, rounded image containers/cards, subtle borders and shadows, and gold accents against light or dark surfaces.
- Existing components primarily use Tailwind utility classes. Follow that pattern for component-level styling; put genuinely global styles and reusable theme variables in `globals.css`.
- The global stylesheet includes custom animation utilities. Reuse them when appropriate and account for reduced-motion preferences when adding motion.
- The root layout loads Inter with `next/font`. Prefer the existing font setup unless a deliberate, consistent typography change is required.
- The CSS currently has a `prefers-color-scheme: dark` rule for background and foreground variables, but the rest of the site is not a complete, consistently applied dark-mode system. Don’t assume that changing those two variables alone fully implements a theme.

## UI implementation guidance

- Design mobile-first and verify narrow, medium, and wide layouts. Existing components use responsive Tailwind variants such as `sm:`, `md:`, and `lg:`.
- Preserve semantic HTML, keyboard access, visible focus states, descriptive image alt text, and accessible names for icon-only controls.
- Use `next/image` for images. Local assets are in `public/`; Cloudinary images are supported by [`src/components/CldImage.tsx`](src/components/CldImage.tsx) and configured in [`next.config.ts`](next.config.ts).
- Use `lucide-react` for new interface icons to stay consistent with existing components.
- Keep shared navigation and footer behavior consistent across routes. The navbar has scroll and mobile-menu behavior; check it before changing its layout or stacking.
- Keep existing form validation and success/error/loading states intact when redesigning forms. Shared validation is in [`src/utils/formValidation.ts`](src/utils/formValidation.ts).
- Avoid hard-coding a new color palette or one-off theme values in many components. Update shared tokens and their Tailwind mappings when making a site-wide theme change.
- Keep content accurate to the business and existing page purpose. Don’t invent property listings, project details, contact information, or route behavior.

## Localization

English and Hindi message files exist under `messages/`, and `next-intl` is configured. However, [`src/i18n/request.ts`](src/i18n/request.ts) currently selects English statically. Some page and component text is also written directly in JSX.

When adding or changing user-facing text, check whether it belongs in the message catalogs and preserve matching keys across locales where applicable. Don’t claim locale switching is active without implementing and verifying the locale-routing/configuration behavior.

## Working practices

- Inspect the existing component and its callers before changing shared UI or theme behavior.
- Keep changes focused and follow the surrounding TypeScript and component patterns.
- Don’t add dependencies for styling or icons without a clear need; Tailwind and `lucide-react` are already available.
- After UI changes, run `pnpm lint` and, when practical, `pnpm build`. Also manually inspect the affected page at mobile and desktop widths.