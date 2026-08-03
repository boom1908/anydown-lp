# Hero buttons + squad role colours

## 1. Hero buttons become real links
In `src/components/anydown/Hero.tsx`, swap the two `<button>` elements for `<a>` tags (same styling, no visual change):
- DOWNLOAD NOW -> `https://github.com/boom1908/anydown-native/releases/download/v2.0.0/anydown.v2.0.0.apk` (direct APK download)
- GITHUB REPO -> `https://github.com/boom1908/anydown-native` (opens in a new tab)

## 2. Squad role-tag colours matched to the floating cursors
Update `roleColor` in `src/components/anydown/Credits.tsx` to the exact hex values used by the hero cursors:

| Member | Role tag | Colour |
|---|---|---|
| BOOM | CORE ARCHITECT | `#FFD600` (cursor yellow) |
| DOMINICBURTT | LEAD DESIGNER | `#4ADE80` (cursor green) |
| CLAUDE | FRONTEND FORGE | `#FF6B35` (cursor orange) |
| GEMINI | SYSTEM GUIDE | `#60A5FA` (cursor blue) |
| LOVABLE | WEB BACKEND ARCHITECT | `#FF6289` (Lovable heart pink) |

Only the small bordered role box (text + border) changes colour; card layout, hover states, and the BUILT ON GIANTS grid stay as they are.

## Note
The "BUILT ON GIANTS" tag colours currently reuse some of the same hexes (e.g. Jetpack Compose off-white, Coil grey). Left untouched unless you want them re-themed too.
