---
title: Quick Settings
---

| Selector | Element or state |
| --- | --- |
| `.quick-settings-root`, `.quick-settings-panel`, `.quick-settings-card` | Surface, panel and grouped card. |
| `.quick-settings-title`, `.quick-settings-text`, `.quick-settings-muted` | Heading, text and muted text. |
| `.quick-settings-tile`, `.quick-settings-active` | Setting tile and its active state. |
| `.quick-settings-slider`, `.quick-settings-value` | Slider control and displayed value. |
| `.quick-settings-icon`, `.quick-settings-icon-control` | Icon and icon control. |
| `.quick-settings-header-button`, `.quick-settings-button`, `.quick-settings-navigation` | Header, generic and navigation controls. |
| `.quick-settings-device-link`, `.quick-settings-profile` | Device link and profile control. |
| `.quick-settings-dialog`, `.quick-settings-confirm` | Dialog and confirmation control. |
| `.quick-settings-structure`, `.quick-settings-separator` | Structural elements and separators. |

```css
.quick-settings-active { background-color: #30363e; }
```

See [theme setup](/desktop/styling/getting-started/) and the [Quick Settings composition](https://github.com/knave-de/knaveshell/blob/master/crates/knave-shell/src/quick_settings/view.rs). CSS does not change the underlying control behavior or shell composition.
