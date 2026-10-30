---
title: Input and shortcuts
---

Edit the file as described in [Configuration](/desktop/configuration/), then validate and reload it.

## Pointer and touchpad

Set these options in `[compositor.input]`:

| Setting | Default | Effect |
| --- | --- | --- |
| `tap_to_click` | `true` | Enable tap to click. |
| `natural_scroll` | `true` | Enable natural scrolling. |
| `focus_follows_mouse` | `true` | Focus a window as the pointer moves over it; set to `false` to focus on click. |

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

| Setting | Values |
| --- | --- |
| `fingers` | An integer of at least 1. |
| `direction` | `"horizontal"`. |
| `action` | `"workspace"` to switch workspaces, or `"none"` to pass the gesture to applications. |

Entries override matching finger count and direction, with later entries taking precedence.

## Shortcuts

Add a binding with a key combination, action and optional arguments. A binding replaces the default for the same combination; other defaults remain active.

```toml
[[compositor.bind]]
keys = "MOD+SHIFT+RETURN"
dispatch = "exec"
args = ["foot"]
```

`MOD` follows `[compositor] modkey`; combinations can also use `CTRL`, `SHIFT`, `ALT`, and mouse buttons `BUTTON_LEFT`, `BUTTON_RIGHT`, `BUTTON_MIDDLE`. `exec` runs the executable and arguments without shell interpretation.

| Action | Arguments |
| --- | --- |
| `close`, `toggle-floating`, `maximize`, `unmaximize`, `toggle-maximize`, `minimize`, `restore-minimized` | None. |
| `toggle-overview`, `quit` | None. |
| `focus-next`, `focus-previous`, `focus-left`, `focus-right`, `focus-up`, `focus-down` | None. |
| `next-workspace`, `previous-workspace`, `last-workspace` | None. |
| `workspace`, `move-to-workspace` | One workspace number as a string. |
| `move-window`, `resize-window` | Optional `"pointer"` target; otherwise use the focused window. |
| `resize-master` | One signed percentage change from -80 to 80, excluding zero. |
| `reset-master` | None. |
| `screenshot` | A mode (`"region"`, `"output"`, or `"window"`) and destination (`"save"` or `"clipboard"`). |
| `exec` | Executable followed by its arguments. |

`knave config check` checks the typed file, but shortcut names and actions are also checked by the compositor when loading. A failed reload keeps the current configuration.
