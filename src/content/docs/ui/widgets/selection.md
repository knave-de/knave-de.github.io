---
title: Selection
---

## Choose a control

| Control | API | Use |
| --- | --- | --- |
| Checkbox | `Widget::Checkbox` | Choose an on/off value. |
| Mixed checkbox | `Widget::MixedCheckbox` | Show checked, unchecked or mixed state. |
| Switch | `Widget::Toggle` | Toggle an on/off setting. |
| Selectable row | `Widget::Selectable` | Select an individual row. |
| Radio group | `Element::selection_group(..., SelectionGroup::Radio, ...)` | Choose one item. |
| Segmented group | `SelectionGroup::Segmented` | Choose one segment. |
| Chip group | `SelectionGroup::Chips` | Choose from chips. |

## Create a checkbox

```rust
use knave_ui::toolkit::*;

let option = Element::new(10, Widget::Checkbox {
    label: "Enable".into(),
    checked: false,
});
```

Handle `Action::CheckChanged` for checkbox changes. Toggle and group controls report their corresponding actions; the application owns persistent state.

## Keyboard and styling

Selection groups use one Tab stop. Arrow keys and Home/End navigate available choices. Applicable CSS states include `:checked`, `:indeterminate`, and `:selected`; see [states](/css/states/).
