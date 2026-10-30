---
title: Session and services
---

These settings use the same [configuration file](/desktop/configuration/). Restart the session for startup and notification changes.

## Session startup

The `[session]` table controls the session supervisor:

| Setting | Default | Meaning |
| --- | --- | --- |
| `backend` | `"auto"` | `"auto"`, `"tty"`, or `"winit"`. |
| `compositor_binary` | `"villain"` | Compositor executable. |
| `shell_binary` | `"knave-shell"` | Shell executable. |
| `restart_on_failure` | `true` | Restart failed components with a bounded retry policy. |

Launch applications when the session starts with `[[session.startup]]`:

```toml
[[session.startup]]
command = ["nm-applet"]
```

The array contains the executable followed by arguments. It does not run a shell or expand variables; use an explicit shell if needed. Up to 64 commands are allowed. Startup commands run after shell roles have started.

In `[shell]`, `start_bar` and `start_overview_service` both default to `true`. Set either to `false` to prevent that role from starting. Wallpaper settings are covered under [Appearance](/desktop/configuration/appearance/).

## Notifications

The session provides notifications when no other daemon already owns the notifications service. History and Do Not Disturb state are stored separately from configuration.

| `[notifications]` key | Default | Range or meaning |
| --- | --- | --- |
| `enabled` | `true` | Enable the service. |
| `history_limit` | `200` | 1–500 entries. |
| `history_days` | `7` | 1–365 days. |
| `banner_timeout_ms` | `6000` | 1000–60000 milliseconds. |
| `max_banners` | `3` | 1–3 banners. |
| `critical_in_dnd` | `false` | Permit critical banners during Do Not Disturb. |

Per-app policies use the application's identifier. `enabled` and `banners` both default to `true`:

```toml
[notifications.app."org.example.App"]
enabled = true
banners = false
```

## Quick Settings

`[quick_settings] charge_limit` is optional and accepts 50–100 percent. Availability depends on hardware support.

`[quick_settings.night_light]` supports `enabled` (default `false`), `temperature` (default 4000, range 2500–6500), and optional `start` and `end`. Both schedule values must be supplied together, differ, and be local minutes after midnight from 0 to 1439. Omitting both uses manual mode. A schedule may cross midnight.

```toml
[quick_settings.night_light]
enabled = true
temperature = 4000
start = 1140 # 19:00
end = 420    # 07:00
```

## Portal preferences

The `[portal]` table configures the desktop portal's startup and appearance preferences:

| Key | Default | Meaning |
| --- | --- | --- |
| `enabled` | `true` | Enable portal startup. |
| `color_scheme` | `0` | 0 follows the theme, 1 prefers dark, 2 prefers light. |
| `accent_color` | `"0.21,0.52,0.89"` | Three comma-separated RGB components, each 0–1. |
| `high_contrast` | `false` | Report high-contrast preference. |
| `reduced_motion` | `false` | Report reduced-motion preference to applications; it does not currently disable workspace transitions. |
