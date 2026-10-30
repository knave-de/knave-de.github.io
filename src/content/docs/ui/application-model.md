---
title: Application model
---

Knave UI separates your application state, UI tree, rendering and window host.

## The pieces

| Piece | Responsibility |
| --- | --- |
| Your application | Owns state and handles actions. |
| `knave-ui` | Holds the retained `Scene`, element tree, layout and input behavior. |
| `knave-renderer` | Paints display commands produced by the scene. |
| `knave-app` | Hosts a window, connects input and rendering, and forwards actions. |

## How an application runs

1. Build an element tree and create a `Scene`.
2. Implement `knave_app::Application` and keep the scene in your application.
3. Return the scene from `scene()` and handle user actions in `action()`.
4. Call `knave_app::run(title, [width, height], app)` to open a window.

The host handles window events, clipboard and IME integration. It waits when idle and redraws when needed. See the complete counter example in [Getting Started](/ui/getting-started/).

## Themes and desktop independence

`run` leaves the scene's theme unchanged and does not read Knave desktop configuration. Applications that own theme settings can use `run_with_theme_provider`. Knave Shell uses a separate Wayland host; the toolkit does not require a Knave session.

Next: [Elements and state](/ui/elements-state/) and [Layout](/ui/layout/).
