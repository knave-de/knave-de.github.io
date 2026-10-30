---
title: Application model
---

A Knave UI application owns its state and a retained `Scene`. The scene holds a tree of elements, handles input and layout, and produces display commands. `knave-renderer` paints those commands; `knave-app` hosts a window, connects input and the renderer, and forwards actions to your application.

Implement `knave_app::Application`: `scene()` returns the mutable scene and `action()` handles an `Action`. Call `knave_app::run(title, [width, height], app)` to start a window. The host handles window events, rendering, clipboard and IME integration. It waits when idle and redraws when needed.

`run` leaves the scene's theme unchanged and does not read Knave desktop configuration. Applications that own theme settings can use `run_with_theme_provider`. Shell surfaces use a separate Wayland host; the toolkit itself does not require Knave Shell.

Next: [Elements and state](/ui/elements-state/) and [Layout](/ui/layout/).
