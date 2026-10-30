---
title: Overview and search
---

Overview combines shell controls with workspace previews supplied by the compositor. Use the selectors below in your [theme file](/desktop/styling/getting-started/).

## Search

| Selector | What it targets |
| --- | --- |
| `.overview-search` | The search text input. |
| `.overview-results` | The search results panel. |
| `.overview-muted` | Placeholder, status, and other secondary text. |
| `.overview-error` | Error text in the footer. |

```css
.overview-search { border: 1px solid #08a9d8; }
.overview-error { color: #f0767c; }
```

## Workspace cards and controls

| Selector | What it targets |
| --- | --- |
| `.overview-card-selected` | The current workspace card. |
| `.overview-card-idle` | An adjacent workspace card. |
| `.overview-control` | Overview button controls, including navigation. |
| `.overview-tray` | The minimized-window tray on a workspace card. |
| `.overview-window-icon` | An icon in the minimized-window tray. |

Cards use compositor-provided previews. CSS can style shell elements around those previews, but does not recolor the window contents or rearrange compositor geometry.

The bundled stylesheet contains older workspace-dot selectors, but the current Overview composition does not assign those classes. They are therefore not listed here as usable controls.

[Source: Overview composition](https://github.com/knave-de/knaveshell/blob/master/crates/knave-shell/src/overview/view.rs).
