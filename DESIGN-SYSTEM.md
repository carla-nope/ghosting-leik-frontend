# GhostingLeik Design System
## Japanese Supernatural Field Guide

---

## Design Philosophy

**Vibe**: Old story collection, supernatural archive, folklore field guide, digital museum exhibit

**Avoid**: Startup landing pages, SaaS templates, generic horror, Halloween clichés, neon cyberpunk

---

## Color Palette

### Primary: Ink & Night
| Name | Hex | Usage |
|------|-----|-------|
| Ink Black | `#0a0a0a` | Deep backgrounds, overlays |
| Ink Deep | `#141414` | Main background |
| Ink Dark | `#1a1a1f` | Cards, surfaces |
| Ink Surface | `#212127` | Elevated elements |

### Secondary: Indigo Night
| Name | Hex | Usage |
|------|-----|-------|
| Indigo Deep | `#0d1030` | Accent backgrounds |
| Indigo Dark | `#151830` | Section dividers |
| Indigo Mid | `#1e2240` | Hover states |

### Accent: Supernatural
| Name | Hex | Usage |
|------|-----|-------|
| Crimson Dark | `#8b2942` | Buttons, CTAs |
| Crimson | `#a83248` | Primary actions |
| Crimson Light | `#c94460` | Hover, active |

### Accent: Antique Gold
| Name | Hex | Usage |
|------|-----|-------|
| Gold Faded | `#b8985a` | Labels, dividers |
| Gold Antique | `#c9a85c` | Headings, links |
| Gold Bright | `#dbb96a` | Highlights, hover |

### Neutral: Parchment & Bone
| Name | Hex | Usage |
|------|-----|-------|
| Parchment | `#f5f0e6` | Light backgrounds |
| Parchment Warm | `#efe8d8` | Cards |
| Bone White | `#faf8f4` | Text on dark |
| Bone Gray | `#e8e4dc` | Secondary text |

---

## Typography

### Display/Headings
```
font-family: 'Cormorant Garamond', Georgia, serif
weight: 600
letter-spacing: 0.02em
```

### Literary/Body
```
font-family: 'EB Garamond', Georgia, serif
weight: 400
line-height: 1.7
```

### Story Excerpts
```
font-family: 'Crimson Text', Georgia, serif
style: italic
```

### UI/Body
```
font-family: 'Inter', system-ui, sans-serif
weight: 400-600
```

---

## Button Styles

### Primary (Crimson)
- Background: `var(--crimson)`
- Border: `1px solid var(--crimson-dark)`
- Hover: `var(--crimson-light)`

### Archive (Outline)
- Background: transparent
- Border: `1px solid var(--border-medium)`
- Hover: gold border, gold text

### Gold (Accent)
- Background: transparent
- Border: `1px solid var(--gold-antique)`
- Hover: gold background 15% opacity

### Seal (Label)
- Background: `var(--crimson)`
- Small caps, letter-spacing 0.1em
- Inner border for depth

---

## Card Styles

### Archive Card (Dark)
- Background: `var(--ink-surface)`
- Border: `1px solid var(--border-subtle)`
- Hover: border becomes medium, shadow

### Parchment Card (Light)
- Background: `var(--parchment)`
- Color: `var(--text-dark)`
- For content on dark backgrounds

---

## Visual Motifs

### Dividers
- Subtle gradient lines
- Centered with icon flourishes
- Faded gold accents

### Labels
- Small caps, letter-spacing 0.2em
- Uppercase text, muted colors
- Ink, crimson, or gold variants

### Icons
- Minimal, line-art style
- Ghost silhouette for branding
- Muted colors that blend with backgrounds

### Backgrounds
- Subtle radial gradients for depth
- Faint paper texture (optional)
- No harsh glows or gradients across sections

---

## Layout Principles

### Not centered-only
- Asymmetrical compositions
- Offset columns for visual interest
- Editorial rhythm and pacing

### Section Variety
- Different layouts for each section
- Archive grids, story excerpts, callouts
- Visual hierarchy through size and position

### Text Hierarchy
- Large serif headings (chapter-like)
- Smaller section labels (field guide style)
- Clear body text with good line height

---

## Example Application

### Hero Section
- Left-aligned title with atmospheric subtitle
- Right panel with featured story or visual
- "Enter the Archive" CTA (not "Get Started")

### Story Cards
- Title, excerpt, category tag
- Hover state with gold border
- Size variation for visual interest

### Yōkai Profiles
- Name in Japanese + romanji
- Category label
- Brief description
- Danger level indicator

---

## Next Steps

1. Apply this style system across all pages
2. Update HomePage with editorial layout
3. Update Stories, Yōkai, Quiz, etc. pages
4. Add subtle visual details (dividers, icons)
5. Test across devices for responsiveness