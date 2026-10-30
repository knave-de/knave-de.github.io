---
title: Appearance
---

Change these settings in your [configuration file](/desktop/configuration/). Window effects and wallpaper can be applied with `knavectl reload` after checking the file.

## Wallpaper

```toml
[shell.wallpaper]
image = "/home/user/Pictures/wallpaper.png"
fit = "cover"
```

Use an absolute image path. `fit` is `"cover"` (default, centered crop), `"contain"` (whole image with black bars), or `"stretch"` (fill the screen). Omit `image` to use black. Reload starts, replaces or stops the wallpaper as needed.

## Theme

```toml
[appearance.theme]
theme = "knave"
mode = "dark"
contrast = "standard"
chroma = "full-color"
```

`theme` defaults to `"knave"` and must contain only ASCII letters, digits, `_` or `-`. `mode` is `"system"` (default), `"dark"` or `"light"`; `system` currently resolves to dark in Knave UI. `contrast` is `"standard"` (default) or `"high"`; `chroma` is `"full-color"` (default) or `"monochrome"`.

Named theme files are stored at `$XDG_DATA_HOME/knave/themes/<theme>/light.css` and `dark.css`, with `~/.local/share` as the usual data directory. Missing files use the bundled palette. See the [CSS reference](/css/selectors/) for supported styling. Shell surfaces may need a restart to pick up the selected scheme; application theme behavior depends on the host.

## Window geometry

Window appearance is configured under `[compositor.appearance]`. Distances are integer logical pixels. Each edge or corner can be set independently; omitted values default to zero.

| Table | Fields | Range |
| --- | --- | --- |
| `gaps.outer` | `top`, `right`, `bottom`, `left` | 0–4096 |
| `gaps.inner` | `top`, `right`, `bottom`, `left` | 0–4096 |
| `border.width` | `top`, `right`, `bottom`, `left` | 0–128 |
| `border.radius` | `top_left`, `top_right`, `bottom_right`, `bottom_left` | 0–4096 |

Outer gaps inset the workspace; inner gaps apply to each tiled window, so adjacent contributions add. Borders reserve space outside client content. For example:

```toml
[compositor.appearance.gaps.outer]
top = 12
right = 12
bottom = 12
left = 12

[compositor.appearance.border.width]
top = 2
right = 2
bottom = 2
left = 2
```

## Focused and unfocused windows

The `focused` and `unfocused` tables under `[compositor.appearance]` have the same fields. `opacity` is 0–100 (default 100). Their `border_color` tables have `top`, `right`, `bottom`, `left`; each defaults to `"#8090b0ff"`. Colors use `#RRGGBB` or `#RRGGBBAA`.

```toml
[compositor.appearance.unfocused]
opacity = 85
[compositor.appearance.unfocused.border_color]
top = "#505868ff"
right = "#505868ff"
bottom = "#505868ff"
left = "#505868ff"
```

Each profile has a `blur` table: `enabled` (default `false`), `radius` (default 8, range 0–64), and `passes` (default 1, range 1–4). Blur shows through transparent window content; it does not blur the application's text.

Each profile also has `shadows.top`, `shadows.right`, `shadows.bottom`, and `shadows.left` tables. Each side supports `enabled` (default `false`), `color` (default `"#00000060"`), `blur_radius` (default 12, 0–128), `spread` (default 0, -128–128), and `offset_x` and `offset_y` (default 0, -256–256). Positive offsets move right and down.

## Effects by window state

`[compositor.appearance.views.tiled]`, `.floating`, and `.maximized` each accept `gaps`, `borders`, `radius`, `shadows`, `opacity`, and `blur` booleans. They default to `true` for tiled and floating windows and `false` for maximized windows. Enabling a switch allows the corresponding configured effect; it does not change its numeric settings. Fullscreen always bypasses these effects.
