---
title: Shared shell classes
---

These classes are used across shell surfaces. They are separate from generic [Knave UI selectors](/css/selectors/).

| Selector | What it targets |
| --- | --- |
| `.knave-shell` | A root element wrapped by the shared shell styling helper. |
| `.shell-light`, `.shell-dark` | The root's selected light or dark scheme. |
| `.shell-structure` | A structural panel in shell compositions. |
| `.shell-overlay` | A structural overlay root. |
| `.shell-control` | Shared control elements in surfaces that assign it. |
| `.shell-text` | Shared text elements in surfaces that assign it. |
| `.shell-muted` | Shared secondary text in surfaces that assign it. |
| `.shell-card` | A shared card, including the tray menu panel. |
| `.high-contrast` | Added to Quick Settings and notification roots when high contrast is active. |
| `.keyboard-focus-visible` | Added to the notification close control when keyboard focus is visible. |

Structural roots can cover the whole output. The bundled shell stylesheet makes `.shell-structure` and `.shell-overlay` transparent; setting a background on one can paint over a much larger area than a visible dialog or panel. Prefer a surface-specific panel class when changing a panel's background.

The shared root classes are assigned by the [shell styles helper](https://github.com/knave-de/knaveshell/blob/master/crates/knave-shell-ui/src/styles/mod.rs). Other classes are assigned by individual surface compositions.
