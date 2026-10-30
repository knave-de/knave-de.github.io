---
title: Layout
---

Each element has a `Layout`. A panel can arrange children with `Flow::Column`, `Flow::Row`, `Flow::Grid { columns }`, or `Flow::Overlay`. Dimensions use `Length::Px`, `Length::Percent`, `Length::Fill`, or `Length::Auto`.

```rust
use knave_ui::toolkit::*;

let row = Element::new(1, Widget::Panel)
    .layout(Layout { flow: Flow::Row, gap: 12.0, ..Default::default() })
    .children(vec![
        Element::new(2, Widget::Button("Back".into())),
        Element::new(3, Widget::Button("Next".into())),
    ]);
```

Layout uses logical pixels. `padding`, `margin`, `gap`, `align`, `offset` and `clip` control spacing and placement. `Widget::Scroll` clips its content area and supports scrolling. CSS can override supported dimensions and spacing, but it does not replace the element tree or turn the toolkit into browser layout. See [CSS properties](/css/properties/).
