# Website To-Do List

Working list for finishing the research-ready.nl marketing site. Check items off as they're done.

## 1. Email

- [ ] Confirm the `info@research-ready.nl` mailbox actually exists at Strato/dundir.com (MX already points there — verify login works, don't assume it needs provisioning).
- [ ] Decide who receives mail sent to `info@research-ready.nl` (forwarding rule, shared inbox, or a real mailbox for Christiaan).
- [ ] Test the `mailto:info@research-ready.nl` link on `/contact` actually opens a compose window with the right address.
- [ ] Set up a "contact form" fallback (optional) if you don't want to rely on `mailto:` alone — e.g. a Formbricks form, since `formbricks.research-ready.nl` is already live.
- [ ] Double check SPF/DKIM/DMARC (Brevo-verified) still pass if `info@` sends outbound mail, not just marketing mail via Brevo.
- [ ] Add a reply-to / autoresponder message for `info@` (optional), e.g. "we reply within 1 business day."

## 2. Nice Website Design

- [ ] Design/content pass on homepage (`src/pages/index.astro` / `en/index.astro`) — currently has uncommitted WIP changes, finish and review copy in both NL and EN.
- [ ] Consistent visual language between the main site (`global.css`) and the pitch deck (`pitch.css`) — decide if they should share a palette/typography or stay distinct.
- [ ] Review/polish `Navbar.astro` and `Footer.astro` for visual consistency across all pages.
- [ ] Add real imagery/illustrations or diagrams for the 8 use-case pipelines (currently likely text-only on `pipelines.astro`).
- [ ] Favicon check — confirm `favicon.svg` renders well in browser tabs (light + dark).
- [ ] Pass a design/copy review over `404.astro` (does it match the rest of the site's tone?).
- [ ] Decide on hero section for homepage — tagline, CTA button placement, above-the-fold clarity.
- [ ] Accessibility pass: color contrast, heading structure, alt text on any images added.

## 3. Book Appointment for the Workshop ("How It Works")

- [ ] Write a "How it works" page or section explaining what the workshop is, who it's for, and what happens in it (currently no such content exists in `en.ts`/`nl.ts` or any page).
- [ ] Decide where this content lives: a new page (e.g. `/workshop`) vs. a section added to the homepage.
- [ ] Add a clear step-by-step (e.g. "1. Book a call → 2. We assess your use case → 3. Workshop session → 4. Pipeline delivered") — mirrors the pitch deck narrative if one already exists there.
- [ ] Replace the placeholder Cal.com `calLink` in `src/components/CalEmbed.astro` (`research-ready/intro`) with the real event link once the Cal.com account/event type is set up.
- [ ] Confirm the Cal.com event type used for the workshop booking is named/configured distinctly if it's different from a generic "intro call" (e.g. `research-ready/workshop`).
- [ ] Add the booking CTA (`CalEmbed`) to the new "how it works" content, not just the `/contact` page.
- [ ] Test the Cal.com embed end-to-end: book a real test slot, confirm confirmation email + calendar invite work.
- [ ] Add NL + EN translations for all new workshop copy in `src/i18n/nl.ts` and `src/i18n/en.ts`.

## 4. Mobile-Friendly

- [ ] Manually test every page (`/`, `/en`, `/contact`, `/en/contact`, `/pipelines`, `/en/pipelines`, `/pitch`, `/en/pitch`, `/404`) on a real phone or Chrome DevTools device emulation.
- [ ] Check `Navbar.astro` collapses to a usable mobile menu (hamburger or stacked links) — verify language toggle still works on small screens.
- [ ] Verify the Cal.com inline embed on `/contact` is usable on mobile (it can be narrow/awkward in `month_view` on small screens — consider Cal.com's mobile-friendly layout option).
- [ ] Check the pitch deck (`PitchSlides.astro`, reveal.js) on mobile — reveal.js slide decks often need explicit touch/swipe and scaling config to work well on phones.
- [ ] Confirm `global.css` media queries (currently 3) cover all breakpoints needed — audit for any fixed-width elements that don't shrink.
- [ ] Run a Lighthouse mobile audit (performance + accessibility + best practices) and fix flagged issues.
- [ ] Check tap target sizes (buttons/links) meet the ~44px minimum on mobile.
- [ ] Test font loading/rendering on mobile — confirm Inter/Space Grotesk woff2 subsets load without layout shift.

## 5. Other Loose Ends (from earlier work / README)

- [ ] Commit or discard the current uncommitted WIP in `src/i18n/en.ts`, `src/i18n/nl.ts`, `src/pages/index.astro`, `src/pages/en/index.astro`.
- [ ] Re-deploy to Cloudflare Pages (`research-ready` project) once content changes are finalized.
- [ ] Final read-through of NL copy vs EN copy for parity (no section present in one language but missing in the other).
