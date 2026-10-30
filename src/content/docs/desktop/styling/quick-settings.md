---
title: Quick Settings
---

Quick Settings uses shell-specific classes in addition to generic Knave UI widget selectors. Add overrides to your [theme file](/desktop/styling/getting-started/).

## Panel and text

| Selector | What it targets |
| --- | --- |
| `.quick-settings-root` | Full surface root; normally transparent. |
| `.quick-settings-panel` | Visible Quick Settings panel. |
| `.quick-settings-card` | A grouped settings card. |
| `.quick-settings-structure` | Structural panel elements. |
| `.quick-settings-title` | Panel heading. |
| `.quick-settings-text` | General text. |
| `.quick-settings-muted` | Secondary text. |
| `.quick-settings-value` | A displayed setting value. |
| `.quick-settings-separator` | Separator between controls. |

## Controls

| Selector | What it targets |
| --- | --- |
| `.quick-settings-tile` | A settings tile. |
| `.quick-settings-active` | An active tile; added in addition to its tile class. |
| `.quick-settings-button` | General buttons and menu controls. |
| `.quick-settings-header-button` | A header button. |
| `.quick-settings-icon` | A Quick Settings icon. |
| `.quick-settings-icon-control` | A control containing an icon. |
| `.quick-settings-slider` | A slider widget. |
| `.quick-settings-navigation` | A navigation control. |
| `.quick-settings-device-link` | A device link. |
| `.quick-settings-profile` | A power profile control. |
| `.quick-settings-dialog` | A Quick Settings dialog. |
| `.quick-settings-confirm` | Dialog confirmation control. |

```css
.quick-settings-tile { border-radius: 8px; }
.quick-settings-active { background-color: #30363e; }
.quick-settings-slider slider-thumb { background-color: #08a9d8; }
```

The slider thumb is a generic Knave UI painted part. See [painted parts](/css/selectors/#painted-parts) for the properties it accepts. Layout and control behavior remain in the [Quick Settings composition](https://github.com/knave-de/knaveshell/blob/master/crates/knave-shell/src/quick_settings/view.rs).
