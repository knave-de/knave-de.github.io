---
title: Shell styling
---

Knave Shell adds classes to its desktop surfaces so a named theme can target specific elements. These are shell-specific classes; the shared [CSS reference](/css/overview/) explains the language they use.

Choose a theme in `[appearance.theme]` in your [configuration](/desktop/configuration/appearance/), then edit its `light.css` or `dark.css` under `$XDG_DATA_HOME/knave/themes/<theme>/` (normally `~/.local/share/knave/themes/`). The shell loads the selected theme and watches its files. Invalid replacements keep the last valid stylesheet.

Find a surface below, then use its selector in the theme file. For example:

```css
.statusbar__workspace-label--active { color: #08a9d8; }
```

CSS changes supported paint and dimensions, but the shell's Rust composition and compositor geometry still determine which elements exist and how surfaces are arranged. Generic widget selectors and painted parts are documented in the [CSS reference](/css/selectors/).

- [Status bar](/desktop/styling/status-bar/)
- [Overview and search](/desktop/styling/overview/)
- [Notifications](/desktop/styling/notifications/)
- [Quick Settings](/desktop/styling/quick-settings/)
- [Dialogs](/desktop/styling/dialogs/)
