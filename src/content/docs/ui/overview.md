---
title: Introduction to Knave UI
---
Knave UI is a reusable Rust UI toolkit. Its logical geometry, styles, display lists and retained scene toolkit are independent of GPU and desktop services. Knave Renderer paints the display list with wgpu; Knave Shell provides desktop-specific hosting and integrations.

The widget gallery runs independently of Knave Shell on an existing Wayland or X11 desktop:

```sh
cargo run -p knave-app --example widget-gallery --locked
```

Run this from a checkout of [Knave UI](https://github.com/knave-de/knave-ui). See its [standalone application guide](https://github.com/knave-de/knave-ui/blob/master/docs/architecture/standalone-apps.md) and [widget catalog](https://github.com/knave-de/knave-ui/blob/master/docs/architecture/widget-catalog.md).

The [CSS reference](/css/selectors/) describes the shared styling engine.

Continue with [Getting Started](/ui/getting-started/), the [application model](/ui/application-model/), and [elements and state](/ui/elements-state/).
