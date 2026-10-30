---
title: Elements and state
---

An `Element` combines a stable identity, a `Widget`, layout, styling and optional children. Build a tree and pass its root to `Scene::new`. Element identities let the scene report which control was used and let the application update that control later.

```rust
use knave_ui::toolkit::*;

let root = Element::new(1, Widget::Panel).children(vec![
    Element::new(2, Widget::Text("Ready".into())),
    Element::new(3, Widget::Button("Continue".into())),
]);
let mut scene = Scene::new(root)?;
scene.set_text(ElementId(2), "Updated")?;
```

When the button is activated, the application receives `Action::Activated(ElementId(3))`. Other actions carry relevant values, such as `TextChanged`, `Toggled`, `Selected` and `ValueChanged`. Match the identity in your application's action handler and update application state or the scene as needed.

IDs must be unique in a scene. The scene provides methods such as `set_text`, `set_widget`, `set_enabled` and `set_visible`. Classes and style IDs are separate from element identity and are used for [CSS selectors](/css/selectors/).
