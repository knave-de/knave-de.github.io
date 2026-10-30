---
title: Shell styling
---

Knave Shell adds classes to its desktop surfaces so a named theme can target specific elements. These are shell-specific classes; the shared [CSS reference](/css/overview/) explains the language they use.

## 1. Select a theme

In your [configuration file](/desktop/configuration/), use a named theme and select a light or dark mode:

```toml
[appearance.theme]
theme = "custom"
mode = "dark"
```

If `[appearance.theme]` already exists, change its values instead of adding another header. Run `knave config check` after saving. `mode = "system"` currently selects the dark stylesheet.

## 2. Create the stylesheet

For the example above, create `~/.local/share/knave/themes/custom/dark.css`. If `XDG_DATA_HOME` is set to an absolute path, use `$XDG_DATA_HOME/knave/themes/custom/dark.css` instead. Use `light.css` for light mode.

Put a rule in the file, for example:

```css
.statusbar__workspace-label--active {
    color: #08a9d8;
}
```

Save the file. The shell watches the selected theme and configuration for changes. Invalid stylesheet replacements leave the last valid stylesheet active. A missing theme file uses the bundled defaults. The theme name, mode, and accessibility policies can also be set under [Appearance](/desktop/configuration/appearance/).

## 3. Find the element

CSS changes supported paint and dimensions, but the shell's Rust composition and compositor geometry still determine which elements exist and how surfaces are arranged. Generic widget selectors and painted parts are documented in the [CSS reference](/css/selectors/).

- [Shared shell classes](/desktop/styling/shared/)
- [Status bar](/desktop/styling/status-bar/)
- [Overview and search](/desktop/styling/overview/)
- [Notifications](/desktop/styling/notifications/)
- [Quick Settings](/desktop/styling/quick-settings/)
- [Dialogs](/desktop/styling/dialogs/)

The selector pages describe classes inspected in Knave Shell source revision `1508e8c`. Rust-generated or conditional classes may change as development continues.
