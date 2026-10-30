---
title: Selection
---

Selection controls include checkboxes, mixed checkboxes, switches, radio groups, segmented controls, chips and selectable rows. A checkbox can be created directly:

```rust
use knave_ui::toolkit::*;
let option = Element::new(10, Widget::Checkbox { label: "Enable".into(), checked: false });
```

The application handles `Action::CheckChanged` or the relevant selection action and owns any persistent state. Selection groups use a single Tab stop; arrow keys and Home/End navigate available choices. Style applicable states with `:checked`, `:indeterminate`, and `:selected`.
