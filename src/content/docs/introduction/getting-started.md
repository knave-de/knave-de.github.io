---
title: Getting Started
---

Knave is in active development. Choose a path below depending on whether you want to try the desktop or explore the UI toolkit.

## Try the desktop

To install the desktop, clone the four component repositories: Knave, Villain, Knave Shell, and the Knave portal backend. Build and install the first three system-wide, then install the portal backend for your user. The system installers may ask for your password through `sudo`.

Run the following from a directory where you want to keep the four checkouts. It requires Git, Rust and Cargo, Python 3, and the components' build dependencies. The directory names must not already exist.

```sh
git clone https://github.com/knave-de/knave.git &&
git clone https://github.com/knave-de/villain.git &&
git clone https://github.com/knave-de/knaveshell.git &&
git clone https://github.com/knave-de/xdg-desktop-portal-knave.git &&
(cd knave && ./scripts/install.sh --system) &&
(cd villain && ./scripts/install.sh --system) &&
(cd knaveshell && ./scripts/install.sh --system) &&
(cd xdg-desktop-portal-knave && ./scripts/install.py --user)
```

The system installers place the desktop binaries in `/usr/local/bin`; the portal installer adds the backend and its activation files for your user. Start a fresh Knave session to activate portal routing. For coordinated source revisions and development testing, see the [development workflow](https://github.com/knave-de/knave/blob/master/docs/dev-workflow.md).

For configuration, see [Desktop configuration](/desktop/configuration/).

## Explore Knave UI

Knave UI is a Rust toolkit that can run independently of Knave's desktop. To explore its widgets on an existing Wayland or X11 desktop, clone [Knave UI](https://github.com/knave-de/knave-ui), enter the checkout, and run:

```sh
cargo run -p knave-app --example widget-gallery --locked
```

The gallery lets you explore widgets and their states. Continue with the [Knave UI overview](/ui/overview/) and [CSS reference](/css/selectors/).
