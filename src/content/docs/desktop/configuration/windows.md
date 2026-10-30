---
title: Windows and workspaces
---

These settings live in `config.toml`. See [Configuration](/desktop/configuration/) for editing and applying changes.

## Layout and focus

In `[compositor]`:

| Setting | Default | What it does |
| --- | --- | --- |
| `master_percent` | `50` | Width of the master area as a percentage of usable workspace width; integer 10–90. A single tiled window fills the usable area. |
| `scale` | `1.0` | Global output scale, 1.0–4.0. Rounded to the nearest 1/120 for fractional-scale clients. |
| `modkey` | `"Super"` | Modifier used by `MOD` shortcuts; use `"Super"` or `"Alt"`. |
| `focus_cycle_order` | `"layout"` | `"layout"` cycles master then stack; `"mru"` uses most recently focused order. |
| `environment_file` | omitted | Path to environment assignments for launched programs. Relative paths are resolved from the configuration directory. When omitted, an optional `environment` file there is used. An explicitly named file must exist. |

```toml
[compositor]
master_percent = 60
focus_cycle_order = "mru"
```

The master divider can also be dragged or resized with shortcuts. That creates a temporary per-workspace override, rather than writing the file. Reset it to return to the configured value.

## Workspaces

```toml
[compositor.workspace]
predefined = 3
skip_empty = true
```

`predefined` defaults to 1 and accepts 1–4095. These workspaces remain available; dynamic workspaces grow after them and are removed only from the end. `skip_empty` defaults to `false`. When enabled, next/previous navigation and swipes prefer occupied workspaces, including those with minimized windows. Direct selection can still reach an empty workspace.

## Window rules

Rules apply when a window opens, not continuously. Application entries match an exact Wayland `app_id`; specific rules can match `app_id`, `title_contains` and `title_regex`. Conditions in one rule must all match. Application entries apply first, then matching specific rules in file order; later rules override only the fields they set.

```toml
[compositor.window_rules]
apply = "on_open"

[[compositor.window_rules.application]]
app_id = "firefox"
workspace = 3

[[compositor.window_rules.rule]]
name = "Picture in picture"
[compositor.window_rules.rule.match]
app_id = "firefox"
title_regex = '(?i)picture[\\s-]*in[\\s-]*picture'
[compositor.window_rules.rule.set]
placement = "floating"
center = true
stay_on_top = true
```

Actions are `placement` (`"tiled"` or `"floating"`), `center`, `stay_on_top`, and `workspace` (1–10). Centering implies floating. A specific rule needs at least one match condition. `name` is optional; `apply` currently accepts `"on_open"`. Invalid regular expressions and invalid workspace numbers reject the configuration. Reload changes rules for newly opened windows.
