---
title: Buttons and actions
---

A button triggers an action when activated. Construct one with a stable ID and handle `Action::Activated` in your application:

```rust
use knave_ui::toolkit::*;

let button = Element::action_button(10, "Save", ButtonVariant::Primary);
// Handle Action::Activated(ElementId(10)) in Application::action.
```

`ButtonVariant` supports primary, secondary, ghost, destructive and icon intent. `Element::loading_button` creates a busy button; `Scene::set_enabled` controls enabled state. `Element::split_button` composes a primary action with a menu.

Style the variants with `button.primary`, `button.secondary`, `button.ghost`, `button.destructive`, and `button.icon`. States such as `:hover`, `:pressed`, `:focus`, `:disabled` and `:busy` are described in [states](/css/states/). The [gallery](/ui/getting-started/) shows these controls and their interaction states.
