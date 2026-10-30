---
title: Notifications
---

Use these classes in your [theme file](/desktop/styling/getting-started/) to target the notification center.

## Center and notification cards

| Selector | What it targets |
| --- | --- |
| `.notifications-root` | Full surface root; normally transparent. |
| `.notifications-panel` | Visible notification panel. |
| `.notifications-structure` | Structural panel elements. |
| `.notifications-title` | Center heading. |
| `.notifications-recent` | Recent notifications section. |
| `.notifications-card` | An individual notification card. |
| `.notifications-unread` | An unread card; added to the card class. |
| `.notifications-critical` | A critical card; added to the card class. |
| `.notifications-summary` | Notification summary text. |
| `.notifications-body` | Notification body text. |
| `.notifications-metadata` | Notification metadata area. |
| `.notifications-progress` | Notification progress indicator. |
| `.notifications-text` | General notification text. |
| `.notifications-muted` | Secondary notification text. |

## Controls and states

| Selector | What it targets |
| --- | --- |
| `.notifications-dnd` | Do Not Disturb area. |
| `.notifications-dnd-title` | Do Not Disturb label. |
| `.notifications-dnd-subtitle` | Do Not Disturb secondary text. |
| `.notifications-toggle` | Do Not Disturb toggle. |
| `.notifications-button` | General button controls. |
| `.notifications-text-button` | Text button controls. |
| `.notifications-close` | Close button. |
| `.notifications-keyboard-focus` | Close control when keyboard-focused. |
| `.notifications-page-button` | History pagination button. |
| `.notifications-page-label` | History page label. |

```css
.notifications-unread { background-color: #30363e; }
.notifications-critical { border: 1px solid #f0767c; }
```

Card arrangement and behavior are controlled by the shell. [Source: notification composition](https://github.com/knave-de/knaveshell/blob/master/crates/knave-shell/src/notifications/view.rs).
