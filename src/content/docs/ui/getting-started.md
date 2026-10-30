---
title: Getting Started
---

Knave UI applications can run on an existing Wayland or X11 desktop; a Knave session is not required. Install Rust and the system dependencies needed by the window and GPU backends, then check out Knave UI.

The widget gallery is a working application in that checkout:

```sh
git clone https://github.com/knave-de/knave-ui.git
cd knave-ui
cargo run -p knave-app --example widget-gallery --locked
```

To build your own application, depend on `knave-app` and `knave-ui`. Implement `Application`, keep a `Scene` in your application, and pass it to `knave_app::run`. Continue with the [application model](/ui/application-model/) and [elements and state](/ui/elements-state/).

The gallery is also a reference for public constructors and interaction handling; its source is in `crates/knave-app/examples/widget-gallery.rs` in the checkout.

## Create a small application

Create a Rust binary project with `cargo new counter`, then add these dependencies to its `Cargo.toml`:

```toml
[dependencies]
knave-app = { git = "https://github.com/knave-de/knave-ui" }
knave-ui = { git = "https://github.com/knave-de/knave-ui" }
```

Replace `src/main.rs` with:

```rust
use knave_app::{AppResult, Application};
use knave_ui::toolkit::{Action, Element, ElementId, Scene, Widget};

struct Counter { scene: Scene, count: u32 }
impl Application for Counter {
    fn scene(&mut self) -> &mut Scene { &mut self.scene }
    fn action(&mut self, action: Action) -> AppResult {
        if action == Action::Activated(ElementId(3)) {
            self.count += 1;
            self.scene.set_text(ElementId(2), format!("Count: {}", self.count))?;
        }
        Ok(())
    }
}
fn main() -> AppResult {
    let root = Element::new(1, Widget::Panel).children(vec![
        Element::new(2, Widget::Text("Count: 0".into())),
        Element::new(3, Widget::Button("Add one".into())),
    ]);
    let app = Counter { scene: Scene::new(root)?, count: 0 };
    knave_app::run("Counter", [400.0, 240.0], app)
}
```

Run `cargo run` from the project directory. Each activation increments application-owned state and updates the text element. The example was checked against the current Knave UI source; a running window also requires a working desktop and graphics backend.
