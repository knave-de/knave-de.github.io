---
title: Getting Started
---

Knave is in active development. Choose a path below depending on whether you want to try the desktop or explore the UI toolkit.

## Try the desktop

Knave's desktop brings together the session supervisor, Villain compositor and Knave Shell. The components are developed in separate repositories, and a working session needs compatible builds of each. The Knave installer installs the CLI, control client and session supervisor; it does not install the whole desktop.

For a development setup, start with the [Knave development workflow](https://github.com/knave-de/knave/blob/master/docs/dev-workflow.md), which describes coordinated builds and testing. Review the [Knave README](https://github.com/knave-de/knave#installation) for the available installer modes.

Once the components are installed and configured, you can inspect the configuration and session settings:

```sh
knave config path
knave config check
knave session check
```

`knave session check` validates the configuration and reports the configured backend and binaries; it does not start the desktop. See [Configuration](/desktop/configuration/) for the configuration file and related commands.

## Explore Knave UI

Knave UI is a Rust toolkit that can run independently of Knave's desktop. To explore its widgets on an existing Wayland or X11 desktop, clone [Knave UI](https://github.com/knave-de/knave-ui), enter the checkout, and run:

```sh
cargo run -p knave-app --example widget-gallery --locked
```

The gallery lets you explore widgets and their states. Continue with the [Knave UI overview](/ui/overview/) and [CSS reference](/css/selectors/).
