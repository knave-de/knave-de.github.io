---
title: Elements and state
---

A Knave UI scene is a tree of elements. Each element has an ID and a widget; it can also have layout, styling and children.

## Create a scene

```rust
use knave_ui::toolkit::*;

let root = Element::new(1, Widget::Panel).children(vec![
    Element::new(2, Widget::Text("Ready".into())),
    Element::new(3, Widget::Button("Continue".into())),
]);
let mut scene = Scene::new(root)?;
scene.set_text(ElementId(2), "Updated")?;
```

IDs must be unique within a scene. Here, `1` identifies the panel, `2` the text, and `3` the button.

## Handle actions

The application receives an action when the user interacts with a control. The action includes the element ID and, when relevant, a value.

| Action | Example use |
| --- | --- |
| `Activated(id)` | A button was activated. |
| `TextChanged(id, text)` | An input's text changed. |
| `Submitted(id, text)` | An input was submitted. |
| `CheckChanged(id, state)` | A checkbox changed. |
| `Toggled(id, value)` | A toggle changed. |
| `Selected(id, item)` | A selection changed. |
| `ValueChanged(id, value)` | A numeric control changed. |
| `ValueCommitted(id, value)` | A numeric change was committed. |

For example, activating the button above produces `Action::Activated(ElementId(3))`. Match that ID in `Application::action`, then update your application state or scene. The [counter example](/ui/getting-started/#create-a-small-application) shows the full flow.

## Update elements

| Scene method | Purpose |
| --- | --- |
| `set_text` | Change text for an existing element. |
| `set_widget` | Replace an element's widget. |
| `set_enabled` | Enable or disable an element. |
| `set_visible` | Show or hide an element. |
| `set_layout` | Change layout for an element. |
| `set_style` | Change an element's style. |

Element IDs identify elements in the scene. CSS classes and style IDs serve a different purpose: they select elements for styling. See [Styling elements](/ui/styling/) for how to assign them and write CSS.
