---
title: Limitations
---

Knave UI implements a subset of CSS, not browser layout. Unsupported selectors, properties and invalid values reject the stylesheet; an invalid replacement leaves the last valid stylesheet active. Named theme files are limited to 64 KiB. Missing files act as an empty theme layer.

Painted parts such as `slider-thumb` have fixed control geometry. They support colors, opacity, borders and radii; text-bearing parts also support typography. Padding, margin, gap and outline are not supported on parts. Parts do not have individual classes or IDs, and `*` matches retained elements rather than parts.

CSS dimensions can affect retained layout, but do not restructure a Rust composition. Inline paragraph spans support text styling but not independent backgrounds, borders, dimensions or hit targets. A scene snapshot is frozen until recaptured. See [properties](/css/properties/) and [selectors](/css/selectors/) for supported features.
