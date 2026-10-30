---
title: Input and shortcuts
---

Edit the file as described in [Configuration](/desktop/configuration/), then validate and reload it.

## Pointer and touchpad

`[compositor.input]` contains `tap_to_click`, `natural_scroll` and `focus_follows_mouse`; all default to `true`. Set the last to `false` to focus windows on click instead of pointer movement.

For individual devices, run `knavectl devices` to see names and capabilities, then add a rule:

```toml
[[compositor.device]]
name = "Example Touchpad"
natural_scroll = false
sensitivity = 0.4
disable_while_typing = true
```

Names match case-insensitively and support `*` and `?`. Global input settings apply first; matching device rules apply in order, with later rules winning. Unset device fields leave the underlying value unchanged.

| Optional device field | Values |
| --- | --- |
| `enabled` | Boolean; false stops events from the device. |
| `tap_to_click`, `tap_and_drag`, `drag_lock` | Booleans for touchpad tap behavior. |
| `natural_scroll`, `disable_while_typing`, `middle_emulation`, `left_handed` | Booleans. |
| `sensitivity` | Number from -1.0 to 1.0; 0.0 is the device default. |
| `accel_profile` | `"adaptive"` or `"flat"`. |
| `scroll_method` | `"no_scroll"`, `"two_finger"`, `"edge"`, or `"on_button_down"`. |
| `scroll_button` | Numeric button code for button scrolling. |
| `click_method` | `"button_areas"` or `"clickfinger"`. |

## Gestures

A three-finger horizontal swipe switches workspaces by default. To pass it to applications instead:

```toml
[[compositor.gesture.bind]]
fingers = 3
direction = "horizontal"
action = "none"
```

`fingers` must be at least 1; `direction` is `"horizontal"`; `action` is `"workspace"` or `"none"`. Entries override matching finger count and direction, with later entries taking precedence.

## Shortcuts

Add a binding with a key combination, action and optional arguments. A binding replaces the default for the same combination; other defaults remain active.

```toml
[[compositor.bind]]
keys = "MOD+SHIFT+RETURN"
dispatch = "exec"
args = ["foot"]
```

`MOD` follows `[compositor] modkey`; combinations can also use `CTRL`, `SHIFT`, `ALT`, and mouse buttons `BUTTON_LEFT`, `BUTTON_RIGHT`, `BUTTON_MIDDLE`. `exec` runs the executable and arguments without shell interpretation.

Available actions include `close`, `toggle-floating`, `maximize`, `unmaximize`, `toggle-maximize`, `minimize`, `restore-minimized`, `toggle-overview`, `quit`, `focus-next`, `focus-previous`, `focus-left`, `focus-right`, `focus-up`, `focus-down`, `next-workspace`, `previous-workspace`, and `last-workspace`; these take no arguments. `workspace` and `move-to-workspace` take a workspace number as a string. `move-window` and `resize-window` optionally take `"pointer"`; otherwise they target the focused window. `resize-master` takes a signed percentage change from -80 to 80 excluding zero; `reset-master` takes no arguments. `screenshot` takes a mode (`"region"`, `"output"`, or `"window"`) and destination (`"save"` or `"clipboard"`).

`knave config check` checks the typed file, but shortcut names and actions are also checked by the compositor when loading. A failed reload keeps the current configuration.
