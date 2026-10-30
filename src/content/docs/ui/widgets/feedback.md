---
title: Feedback and overlays
---

## Choose a component

| Component | Purpose |
| --- | --- |
| Progress | Show determinate or indeterminate progress. |
| Spinner | Indicate ongoing work. |
| Alert or status | Present feedback with semantic meaning. |
| Toast | Show a temporary or dismissible message. |
| Menu | Present a list of actions. |
| Popup or dialog | Present content over the current scene. |
| Empty state | Explain an absence of content. |

## Create a progress indicator

```rust
use knave_ui::toolkit::*;

let progress = Element::new(10, Widget::Progress { value: Some(0.5) });
```

Use `Some(value)` for determinate progress or `None` for indeterminate progress.

## Overlays and lifetime

Modal popups keep keyboard focus within their scope. Toast lifetime and dismissal are managed by the scene. The [gallery](/ui/getting-started/) demonstrates popup opening, dismissal and focus behavior. See [CSS selectors](/css/selectors/) for `progress`, `spinner`, `toast`, `menu`, and `popup` selectors and their painted parts.
