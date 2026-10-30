---
title: Feedback and overlays
---

Use progress indicators and spinners for ongoing work, alerts and status for feedback, and toasts for temporary messages. Menus, popups and modal dialogs provide overlays; modal popups keep keyboard focus within their scope.

```rust
use knave_ui::toolkit::*;
let progress = Element::new(10, Widget::Progress { value: Some(0.5) });
```

A progress value of `None` is indeterminate. Toast lifetime and dismissal are managed by the scene. The [gallery](/ui/getting-started/) demonstrates popup opening, dismissal and focus behavior.
