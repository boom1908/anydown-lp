# Section Header Animation & Zero-Shift Typography Plan

Eliminate typing animation line-wrapping and overflow glitches across all section headers on Anydown by rendering subtitles statically and upgrading title animations to preserve exact layout geometry from frame 0.

## User Review & Critical Decisions

> [!IMPORTANT]
> Based on your selection, we are keeping all section subtitles completely static (eliminating jittery multi-line paragraph shifts) and animating only the section titles using a zero-layout-shift character reveal.

- **Confirmed Decision 1**: Animate only section titles and keep subtitles static as clean, readable text.
- **Confirmed Decision 2**: Upgrade the title typing animation engine so words never wrap or drop to new lines mid-animation on mobile or desktop.
- **Confirmed Decision 3**: Apply this fix globally across all 8 section headers (`Features`, `How It Works`, `Manifesto`, `Comparison`, `Updates`, `Credits`, `Feedback`, `FAQ`).

---

## 1. Overview & Core Concept

- **The Problem**: Section subtitles contain long sentences (50–100 characters). When animated character-by-character, each new word causes the paragraph layout to violently reflow and snap downwards on Android screens. Additionally, multi-line titles (such as `HOW IT\nWORKS.`) suffered from words jumping between lines mid-typing.
- **The Solution**:
  1. **Static Subtitles**: Remove `GlitchText` from all section subtitles and labels, rendering them immediately as crisp, legible monospace text.
  2. **Pre-Formatted Title Reveal**: Update `GlitchText` to keep full text in the DOM from frame 0 (with pre-calculated word wraps and explicit line breaks) so that individual letters simply illuminate into view without altering the line geometry or causing text to jump down.

---

## 2. User Experience & Visual Design

### Before vs. After Behavior

```
BEFORE (Glitchy):
Frame 1: "HOW IT"             <- Squeezed on line 1
Frame 2: "HOW IT WO..."       <- Trying to fit on line 1
Frame 3: "HOW IT"             <- Suddenly "WORKS" snaps down!
         "WORKS."             <- Violent vertical jump & re-center

AFTER (Zero-Shift):
Frame 0: [Line 1: HOW IT (hidden)] [Line 2: WORKS. (hidden)]  <- Layout locked
Frame 1: "H... O... W..."      <- Types on line 1
Frame 2: "HOW IT"              <- Finished line 1
Frame 3: "W... O... R... K..." <- Types on line 2 (already placed!)
```

### Visual Specifications

- **Titles**: Animate character-by-character with zero jumping, honoring explicit `\n` line breaks and responsive word boundaries.
- **Subtitles**: Instant render with WCAG-compliant `#666666` / `#888888` IBM Plex Mono styling, immediately readable upon scroll.
- **Labels**: Instant render in vibrant `#FFD600` yellow tags.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Static Subtitles vs. Full Paragraph Typing**
  - _Chosen Approach_: Subtitles are rendered statically without typewriter delay.
  - _Why_: Long paragraph text typed character-by-character degrades readability, forces the user to wait to read instructions, and causes continuous layout instability on mobile viewports.
  - _Alternatives Considered_: Delaying subtitle typing until the title finishes (still suffered from line reflow once started).

- **Decision 2: Visibility-Based Character Reveal vs. String Slicing**
  - _Chosen Approach_: Render all characters in their final positions from frame 0, revealing them sequentially by toggling visibility/opacity rather than appending characters to an expanding string.
  - _Why_: Eliminates the browser's need to re-calculate word wrapping on every keystroke, guaranteeing 0px layout shift.

---

## 4. Technical Architecture & Component Flow

```
┌─────────────────────────────────────────────────────────────┐
│ SectionHeader Component (src/components/anydown/SectionHeader.tsx) │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Label: Static IBM Plex Mono ([01] // FEATURES)          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Title: GlitchText with Zero-Shift Character Reveal      │ │
│ │ - Full layout geometry established at mount             │ │
│ │ - Characters revealed sequentially without reflow       │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Subtitle: Static IBM Plex Mono paragraph text           │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

- **Files Targeted**:
  - `src/components/anydown/GlitchText.tsx`: Upgrade the reveal mechanism to preserve pre-wrapped text lines and eliminate reflows.
  - `src/components/anydown/SectionHeader.tsx`: Switch subtitles and labels to clean static rendering while preserving animated titles.
- **Verification**: Run `compile_applet`, `lint_applet`, and verify across all 8 sections on simulated mobile viewport.
