---
title: Styling elements
---

Knave UI lets you target an element by its widget type, CSS class, or CSS style ID. The application assigns classes and style IDs in Rust; the stylesheet selects them.

## Add a class or style ID

```rust
use knave_ui::toolkit::*;

let save = Element::new(10, Widget::Button("Save".into()))
    .class("toolbar-action")
    .class("save-action")
    .style_id("save-button");
```

| Rust | CSS selector | Matches |
| --- | --- | --- |
| `Widget::Button(...)` | `button` | Buttons by widget type. |
| `.class("toolbar-action")` | `.toolbar-action` | Every element with that class. |
| `.style_id("save-button")` | `#save-button` | Elements with that style ID. |
| Both above | `button.toolbar-action#save-button` | A button with that class and style ID. |

Call `.class(...)` more than once to add multiple classes. A class or style ID is written without `.` or `#` in Rust; those characters belong in the CSS selector.

The numeric `10` is the **element ID** used for actions and scene updates. It does not automatically become the CSS style ID. Choose a separate style ID using `.style_id(...)`.

## Apply a stylesheet

Create a scene containing the element, then set its application stylesheet:

```rust
use knave_ui::toolkit::*;

let button = Element::new(10, Widget::Button("Save".into()))
    .class("toolbar-action")
    .style_id("save-button");
let mut scene = Scene::new(Element::new(1, Widget::Panel).children(vec![button]))?;

scene.set_stylesheet(r#"
    .toolbar-action { background-color: #30363e; }
    #save-button:hover { color: #08a9d8; }
"#)?;
```

The class rule affects any matching element; the ID rule changes the Save button's text when hovered. Stylesheet parsing can fail, so handle the returned error. `set_stylesheet` replaces the application stylesheet; an invalid replacement leaves the previous valid styles in place.

## Go further

- [Selectors](/css/selectors/) lists widget types and painted parts.
- [Pseudo-classes and states](/css/states/) covers hover, focus, pressed and other states.
- [Properties and values](/css/properties/) lists supported declarations.
- [Cascade and inheritance](/css/cascade/) explains how stylesheet layers combine.
- [Shell styling](/desktop/styling/getting-started/) lists classes assigned by Knave Shell. Those classes are supplied by the shell; you do not need to add them to its Rust code to target them.
