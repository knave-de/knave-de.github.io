---
title: Configuration
---

Knave keeps desktop settings in one TOML file. You can change only the settings you need; omitted settings use their defaults.

## Find and edit your configuration

1. Run `knave config path` to find your configuration file. Normally it is `~/.config/knave/config.toml`. `KNAVE_CONFIG` overrides the path; otherwise `XDG_CONFIG_HOME` changes the base directory.
2. If the file does not exist, run `knave config init` to create it. Do not run this to replace an existing configuration.
3. Open the file in a text editor. Add the settings you want, or edit their existing values. TOML table headers such as `[compositor]` must not be repeated: add keys to the existing table instead.
4. Save the file and run `knave config check`. Fix any errors it reports before applying your changes.
5. For compositor settings and wallpaper, run `knavectl reload` in the running session. Session startup, shell process and notification settings require a session restart. Individual guides explain exceptions.

For example, to change the master window's share of the workspace, add this to the existing `[compositor]` table:

```toml
[compositor]
master_percent = 60
```

Then run `knave config check` and `knavectl reload`. A manually resized workspace keeps its temporary override until reset or restart.

## Choose what to configure

- [Windows and workspaces](/desktop/configuration/windows/) — layout, scaling and window rules.
- [Input and shortcuts](/desktop/configuration/input/) — mouse, touchpad, gestures and key bindings.
- [Appearance](/desktop/configuration/appearance/) — wallpaper, themes, gaps and window effects.
- [Session and services](/desktop/configuration/session/) — startup, notifications, portal and quick settings.

`knave config print` prints the saved file. It does not expand omitted values into a complete list of defaults. Validation checks the typed configuration; a matching compositor and shell are also needed to apply its settings.
