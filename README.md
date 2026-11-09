# Vinyly Build Proposal (tender site)

A static site with no build step and no dependencies:
- `index.html`: the proposal, with the seven design directions as recordings.
- `directions/`: each direction's homepage and key screen as its own live page (`a-home.html`, `a-screen.html` … `g-screen.html`), with the images they use in `directions/images/`. Each has a "Back to proposal" button.
- `media/`: the screen recordings, posters and full-page images used by `index.html`.

## Edit in Cursor
1. Open this folder in Cursor (File > Open Folder).
2. All copy lives in `index.html`. Side A (the proposal) is the `<main>` sections `#a1` to `#a6`; Side B (design directions) is the `D` array in the `<script>` at the bottom.
3. To change a direction's own page, edit its file in `directions/`; the matching recording in `media/` will not update by itself.
4. Colours and fonts are tokens at the top of the `<style>` block (`:root`), with a dark-mode set below them.
5. Preview locally: in Cursor's terminal run `npm run dev` (or `npx serve .` / `python3 -m http.server`) and open the address it prints. Opening the file directly also works, but videos load more reliably from a local server.

## Put it online (pick one)
- **Vercel:** `npx vercel` in this folder, accept the defaults. Add a password with Vercel's Deployment Protection if the tender is confidential.
- **Netlify:** drag this folder onto app.netlify.com/drop.
- **Any web host:** upload the whole folder as it is.

The page sets `noindex`, so search engines will not list it. Remove that meta tag if you want it public.

## Before sending
- Replace `[PRICE]` placeholders shown inside the design recordings once Vinyly confirms format pricing (they are baked into the videos; ask for re-recordings if they change).
- Check the next-step dates in the "Run-out" section.
