---
title: Notifications
---

| Selector | Element or state |
| --- | --- |
| `.notifications-root`, `.notifications-panel` | Notification surface and panel. |
| `.notifications-title`, `.notifications-recent` | Center heading and recent section. |
| `.notifications-card`, `.notifications-unread`, `.notifications-critical` | Notification card and conditional unread/critical states. |
| `.notifications-summary`, `.notifications-body`, `.notifications-metadata` | Notification text and metadata. |
| `.notifications-dnd`, `.notifications-dnd-title`, `.notifications-dnd-subtitle`, `.notifications-toggle` | Do Not Disturb controls. |
| `.notifications-button`, `.notifications-text-button`, `.notifications-close` | Notification controls. |
| `.notifications-progress` | Progress indicator. |
| `.notifications-muted`, `.notifications-structure` | Muted text and structural elements. |
| `.notifications-keyboard-focus` | Keyboard-focused notification state. |
| `.notifications-page-button`, `.notifications-page-label` | History pagination. |

```css
.notifications-critical { border-color: #f0767c; border-width: 1px; }
```

See [theme setup](/desktop/styling/getting-started/) and the [notification composition](https://github.com/knave-de/knaveshell/blob/master/crates/knave-shell/src/notifications/view.rs). Card arrangement and control behavior remain controlled by the shell.
