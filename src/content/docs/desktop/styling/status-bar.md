---
title: Status bar
---

The status bar contains workspace controls, a focused application display, applets, and system controls. Add overrides to your [selected theme](/desktop/styling/getting-started/).

## Workspaces

| Selector | What it targets |
| --- | --- |
| `.statusbar__workspace-island` | The workspace group. |
| `.statusbar__workspace-action` | A workspace selection button. |
| `.statusbar__workspace-label` | The number displayed for a workspace. |
| `.statusbar__workspace-label--active` | The label when that workspace is active. |
| `.statusbar__workspace-label--occupied` | The label when that workspace contains windows. |
| `.statusbar__workspace-occupancy` | A workspace occupancy marker. |

Active and occupied are independent: a label can have both classes. Workspace action buttons also use the toolkit's primary, secondary, or ghost variant for active, occupied, and empty workspaces respectively.

```css
.statusbar__workspace-label--active {
    color: #08a9d8;
    font-weight: 700;
}
```

## Focused application and applets

| Selector | What it targets |
| --- | --- |
| `.statusbar__focus-island` | The focused application group. |
| `.statusbar__focused-title` | The focused application title. |
| `.statusbar__focused-icon` | The focused application icon. |
| `.statusbar__applet-island` | The applet group. |
| `.statusbar__applet-action` | An applet's action target. |
| `.statusbar__applet-icon` | An applet icon. |
| `.statusbar__applet-label` | An applet label. |
| `.statusbar__applet-attention` | An applet attention indicator. |

## Notifications and system controls

| Selector | What it targets |
| --- | --- |
| `.statusbar__notification-island` | Notification group. |
| `.statusbar__notifications-action` | Notification center action. |
| `.statusbar__notification-icon` | Notification icon. |
| `.statusbar__unread-badge` | Unread count badge background. |
| `.statusbar__unread-count` | Unread count text. |
| `.statusbar__dnd-marker` | Do Not Disturb marker. |
| `.statusbar__notification-state` | Notification state text. |
| `.statusbar__system-island` | System control group. |
| `.statusbar__quick-settings-action` | Quick Settings action. |
| `.statusbar__network-icon` | Network icon. |
| `.statusbar__volume-icon` | Volume icon. |

## Other bar elements

| Selector | What it targets |
| --- | --- |
| `.statusbar`, `#statusbar` | The bar's root panel. |
| `.statusbar__brand` | Knave logo image. |
| `.statusbar__overview-island` | Overview control group. |
| `.statusbar__overview-action` | Overview action target. |
| `.statusbar__action` | Fallback action class. |
| `.statusbar__content` | Fallback content class. |

The bar assigns the same base name as both a class and a style ID to its generated nodes and action targets. State classes such as `--active` are additional classes. These IDs are not unique per workspace: several nodes can share one base name.

Bar geometry and hit targets are constructed by the shell; CSS is not a general mechanism for rearranging the bar. [Source: status bar composition](https://github.com/knave-de/knaveshell/blob/master/crates/knave-shell-ui/src/status_bar.rs).
