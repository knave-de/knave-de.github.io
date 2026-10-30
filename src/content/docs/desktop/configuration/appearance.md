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

Set `image` to an absolute path. Omit it to use a black background.

Choose how the image fits the screen with `fit`:

| Value | Result |
| --- | --- |
| `"cover"` (default) | Fill the screen, cropping the image from the center if needed. |
| `"contain"` | Show the whole image, with black bars where needed. |
| `"stretch"` | Fill the screen by stretching the image. |

Run `knavectl reload` to apply the change. Knave starts, replaces, or stops the wallpaper as needed.

## Theme

```toml
[appearance.theme]
theme = "knave"
mode = "dark"
contrast = "standard"
chroma = "full-color"
```

| Setting | Default | Values |
| --- | --- | --- |
| `theme` | `"knave"` | A name containing ASCII letters, digits, `_`, or `-`. |
| `mode` | `"system"` | `"system"`, `"dark"`, or `"light"`. System currently resolves to dark in Knave UI. |
| `contrast` | `"standard"` | `"standard"` or `"high"`. |
| `chroma` | `"full-color"` | `"full-color"` or `"monochrome"`. |

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

The `focused` settings apply to the window with keyboard focus. The `unfocused` settings apply to other windows. Both tables under `[compositor.appearance]` have the same fields. `opacity` is 0–100 (default 100). Their `border_color` tables have `top`, `right`, `bottom`, `left`; each defaults to `"#8090b0ff"`. Colors use `#RRGGBB` or `#RRGGBBAA`.

```toml
[compositor.appearance.unfocused]
opacity = 85
[compositor.appearance.unfocused.border_color]
top = "#505868ff"
right = "#505868ff"
bottom = "#505868ff"
left = "#505868ff"
```

### Blur

Configure blur separately for the focused and unfocused windows using `[compositor.appearance.focused.blur]` and `[compositor.appearance.unfocused.blur]`. Blur shows through transparent window content; it does not blur the application's text.

| Setting | Default | Values |
| --- | --- | --- |
| `enabled` | `false` | `true` or `false` |
| `radius` | `8` | 0–64 |
| `passes` | `1` | 1–4 |

### Shadows

Configure shadows separately for focused and unfocused windows. For example, use `[compositor.appearance.focused.shadows.bottom]` for the focused window’s bottom shadow, or `[compositor.appearance.unfocused.shadows.bottom]` for unfocused windows. The available sides are `top`, `right`, `bottom`, and `left`; each supports the same settings:

| Setting | Default | Values |
| --- | --- | --- |
| `enabled` | `false` | `true` or `false` |
| `color` | `"#00000060"` | `#RRGGBB` or `#RRGGBBAA` |
| `blur_radius` | `12` | 0–128 |
| `spread` | `0` | -128–128 |
| `offset_x` | `0` | -256–256; positive moves right. |
| `offset_y` | `0` | -256–256; positive moves down. |

## Effects by window state

`[compositor.appearance.views.tiled]`, `.floating`, and `.maximized` each accept `gaps`, `borders`, `radius`, `shadows`, `opacity`, and `blur` booleans. They default to `true` for tiled and floating windows and `false` for maximized windows. Enabling a switch allows the corresponding configured effect; it does not change its numeric settings. Fullscreen always bypasses these effects.

For example, to allow your configured borders and corner radii on maximized windows:

```toml
[compositor.appearance.views.maximized]
borders = true
radius = true
```

If this table already exists in your file, change its existing `borders` and `radius` values instead of adding another table header. The configured border widths and corner radii must also be greater than zero for the effects to be visible. Validate with `knave config check`, then apply with `knavectl reload`.
