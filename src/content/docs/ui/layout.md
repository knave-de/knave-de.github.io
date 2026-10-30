---
title: Layout
---

Each element has a `Layout`. A panel arranges its children according to its flow.

## Choose a flow

| Flow | Arrangement |
| --- | --- |
| `Flow::Column` | Children from top to bottom. |
| `Flow::Row` | Children from left to right. |
| `Flow::Grid { columns }` | Children in a grid with the specified number of columns. |
| `Flow::Overlay` | Children in an overlay. |

## Create a row

```rust
use knave_ui::toolkit::*;

let row = Element::new(1, Widget::Panel)
    .layout(Layout { flow: Flow::Row, gap: 12.0, ..Default::default() })
    .children(vec![
        Element::new(2, Widget::Button("Back".into())),
        Element::new(3, Widget::Button("Next".into())),
    ]);
```

## Size and spacing

| Field or type | Purpose |
| --- | --- |
| `Length::Px`, `Percent`, `Fill`, `Auto` | Size an element in logical pixels, as a percentage, to fill, or automatically. |
| `padding`, `margin`, `gap` | Space around content, outside an element, or between children. |
| `align`, `offset` | Align and position content. |
| `clip` | Control child overflow. |
| `Widget::Scroll` | Provide a scrollable container that clips its content. |

CSS can override supported dimensions and spacing, but it does not replace the element tree. See [CSS properties](/css/properties/).
