---
title: Theme variables
---

Custom properties inherit through the element tree. Use `var(--name)` or provide a fallback with `var(--name, fallback)`:

```css
:root { --my-accent: #08a9d8; }
button.primary { background-color: var(--my-accent, #08a9d8); }
```

The bundled palettes expose variables including `--accent`, `--canvas`, `--surface`, `--surface-raised`, `--surface-hover`, `--surface-selected`, `--text`, `--text-secondary`, `--border`, `--warning`, and `--danger`. Values vary with the scheme and accessibility policy.

Named theme files live at `$XDG_DATA_HOME/knave/themes/<theme>/light.css` and `dark.css`; the usual data directory is `~/.local/share`. See [desktop appearance](/desktop/configuration/appearance/) for selecting a theme and [cascade](/css/cascade/) for precedence.
