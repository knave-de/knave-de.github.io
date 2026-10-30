---
title: Status bar
---

These classes identify elements in the status bar. [Set up a theme](/desktop/styling/getting-started/) before adding overrides.

| Selector | Element or state |
| --- | --- |
| `.statusbar__workspace-label` | Workspace number label. |
| `.statusbar__workspace-label--active` | Label for the active workspace. |
| `.statusbar__workspace-label--occupied` | Label for an occupied workspace. |
| `.statusbar__workspace-occupancy` | Workspace occupancy marker. |
| `.statusbar__workspace-action` | Workspace selection control. |
| `.statusbar__overview-action`, `.statusbar__overview-island` | Overview control and its group. |
| `.statusbar__focused-title`, `.statusbar__focused-icon`, `.statusbar__focus-island` | Focused application title, icon and group. |
| `.statusbar__notification-icon`, `.statusbar__unread-badge`, `.statusbar__unread-count`, `.statusbar__dnd-marker`, `.statusbar__notification-state` | Notification indicator and state. |
| `.statusbar__network-icon`, `.statusbar__volume-icon`, `.statusbar__system-island` | System indicators and their group. |
| `.statusbar__applet-icon`, `.statusbar__applet-label`, `.statusbar__applet-attention`, `.statusbar__applet-island` | Applet content and group. |
| `.statusbar__brand` | Knave logo. |
| `.statusbar__workspace-island`, `.statusbar__notification-island` | Workspace and notification groups. |
| `.statusbar__notifications-action`, `.statusbar__quick-settings-action`, `.statusbar__applet-action` | Notification, Quick Settings and applet controls. |
| `.statusbar__action`, `.statusbar__content` | Fallback action and content classes. |

```css
.statusbar__workspace-label--active { color: #08a9d8; font-weight: 700; }
```

The bar's Rust composition determines the groups and their geometry. [Source: status bar composition](https://github.com/knave-de/knaveshell/blob/master/crates/knave-shell-ui/src/status_bar.rs).
