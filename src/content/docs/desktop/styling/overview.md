---
title: Overview and search
---

| Selector | Element or state |
| --- | --- |
| `.overview-search` | Search input. |
| `.overview-results` | Search results area. |
| `.overview-card-selected`, `.overview-card-idle` | Selected and unselected overview cards. |
| `.overview-control` | Overview button controls. |
| `.overview-muted`, `.overview-error` | Muted and error text. |
| `.overview-tray`, `.overview-window-icon` | Overview tray and window icon. |
| `.overview-workspace-indicator-rail` | Workspace indicator rail. |
| `.overview-current-dot`, `.overview-workspace-dot-occupied`, `.overview-workspace-dot-empty` | Current, occupied and empty workspace indicators. |

```css
.overview-card-selected { background-color: #30363e; }
```

Overview placement and compositor window previews depend on Rust and compositor geometry; CSS does not rearrange that composition. See [theme setup](/desktop/styling/getting-started/) and the [overview implementation](https://github.com/knave-de/knaveshell/blob/master/crates/knave-shell/src/overview/view.rs).
