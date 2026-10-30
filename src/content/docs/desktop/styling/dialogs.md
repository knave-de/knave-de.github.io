---
title: Dialogs
---

| Selector | Element or state |
| --- | --- |
| `.portal-picker` | Portal selection surface. |
| `.portal-card` | Selectable portal source card. |
| `.portal-selected` | Selected portal source. |
| `.portal-sharing` | Active sharing indicator. |
| `.portal-frozen` | Frozen workspace indicator. |
| `.quick-settings-dialog`, `.quick-settings-confirm` | Quick Settings dialog and confirmation button. |
| `.polkit-dialog` | Authentication dialog root. |
| `.polkit-field` | Authentication input field. |
| `.tray-menu-panel` | Tray menu panel. |
| `.tray-menu-action` | Tray menu action. |
| `.tray-menu-status` | Tray menu status text. |

```css
.portal-selected { border-width: 1px; border-color: #08a9d8; }
```

See [theme setup](/desktop/styling/getting-started/) and the [portal composition](https://github.com/knave-de/knaveshell/blob/master/crates/knave-shell/src/portal.rs). The shell controls dialog geometry and behavior.
