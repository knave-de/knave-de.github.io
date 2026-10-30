---
title: Typography and display
---

Use `Widget::Text` for text and `Element::heading` with `HeadingLevel::H1`, `H2` or `H3` for semantic headings. Paragraphs can contain styled spans; images, icons, badges and separators support display compositions.

```rust
use knave_ui::{HeadingLevel, toolkit::*};
let title = Element::heading(10, "Settings", HeadingLevel::H1);
```

Text styles and semantic selectors are described in [CSS selectors](/css/selectors/). Inline paragraph spans support text styling, but do not have independent backgrounds, layout or hit targets.
