---
title: Buttons and actions
---

Buttons let a user trigger an action. Give each button a unique element ID so your application can identify it.

## Create a button

```rust
use knave_ui::toolkit::*;

let save = Element::action_button(10, "Save", ButtonVariant::Primary);
```

When activated, the application receives `Action::Activated(ElementId(10))`. See [Elements and state](/ui/elements-state/) for handling actions.

## Variants and states

| Constructor or variant | Use |
| --- | --- |
| `Widget::Button(label)` | Basic button. |
| `ButtonVariant::Primary` | Main action. |
| `ButtonVariant::Secondary` | Secondary action. |
| `ButtonVariant::Ghost` | Low-emphasis action. |
| `ButtonVariant::Destructive` | Destructive action. |
| `Element::icon_button(id, image_id, &icon)` | Button containing an icon. |
| `Element::loading_button(id, label)` | Busy button. |
| `Element::split_button(id, primary, menu)` | Primary action and menu together. |

Use `Scene::set_enabled` to enable or disable an element. The toolkit tracks focus, hover and pressed states.

## Style a button

| Selector | Target |
| --- | --- |
| `button.primary` | Primary variant. |
| `button.secondary` | Secondary variant. |
| `button.ghost` | Ghost variant. |
| `button.destructive` | Destructive variant. |
| `button.icon` | Icon variant. |
| `button:busy` | Busy button. |

For example, `button.primary:hover` targets a primary button under the pointer. See [states](/css/states/) for the available pseudo-classes.
