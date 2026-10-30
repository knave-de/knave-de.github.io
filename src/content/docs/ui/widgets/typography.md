---
title: Typography and display
---

## Choose an element

| Element | API | Purpose |
| --- | --- | --- |
| Text | `Widget::Text` | Display text. |
| Heading | `Element::heading` | Display a semantic H1, H2 or H3 heading. |
| Subtitle and caption | `Element::subtitle`, `Element::caption` | Display secondary text. |
| Paragraph and spans | `Widget::Paragraph`, `Element::span` | Display rich text. |
| Link | `Widget::Link` | Present a link with a target. |
| Icon or image | `Widget::Icon`, `Widget::Image` | Display application-provided visual content. |
| Badge | `Element::badge` | Display a compact label. |
| Separator | `Widget::Separator` | Separate content. |
| Snapshot | `Widget::SceneSnapshot` | Display a captured scene. |

## Create a heading

```rust
use knave_ui::{HeadingLevel, toolkit::*};

let title = Element::heading(10, "Settings", HeadingLevel::H1);
```

The heading also matches the `heading`, `h1`, and `text` selectors. See [CSS selectors](/css/selectors/) for styling.

Inline paragraph spans support text styling, but do not have independent backgrounds, layout or hit targets. A scene snapshot is frozen until recaptured.
