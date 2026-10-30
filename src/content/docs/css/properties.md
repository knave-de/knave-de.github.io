---
title: Properties and values
---

These declarations are implemented by Knave UI's CSS engine. Applicability depends on the element or painted part; see [selectors](/css/selectors/).

| Property | Values | Affects layout? |
| --- | --- | --- |
| `color`, `background`, `background-color` | Supported colors or variables | No |
| `opacity` | Number 0–1 or percentage; out-of-range values are clamped | No |
| `width`, `height` | Logical pixels, percentages, `auto`, `fit-content` | Yes |
| `padding`, `margin` | One to four logical pixel lengths | Yes |
| `gap` | Logical pixel length | Yes |
| `border`, `border-width`, `border-color`, per-edge border shorthands and width/color longhands | Solid border widths and colors | Width reserves space |
| `border-radius`, per-corner radius longhands | Logical pixel lengths | No |
| `outline`, `outline-width`, `outline-color`, `outline-offset` | Width, color and offset; offset can be negative | No |
| `font-family`, `font-size`, `font-style`, `font-weight`, `line-height` | Family, logical pixel sizes, `normal`/`italic`/`oblique`, weight 1–1000 | Text metrics can affect layout |
| `text-align`, `text-wrap` | `start`/`left`, `center`, `end`/`right`; `none`, `word`, `word-or-glyph` | Text wrapping can affect layout |
| `content` | Quoted string or `none` for `checkbox-mark` | No independent part geometry |
| `transform` | Unsupported | — |

Lengths are logical pixels. Colors include `#RGB`, `#RRGGBB`, `#RRGGBBAA`, `transparent`, `white`, `black`, `accent`, `warning`, `danger`, `text`, and `background`. CSS dimensions override Rust dimensions and remeasure the scene. `auto` maps to fill for width and automatic sizing for height; `fit-content` maps to automatic sizing.

Borders reserve layout space; outlines paint independently. Painted parts support a smaller set of properties and have fixed geometry. See [limitations](/css/limitations/).
