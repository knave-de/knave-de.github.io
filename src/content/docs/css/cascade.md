---
title: Cascade and inheritance
---

Styles are applied in this order, from lowest to highest priority:

1. Scheme defaults.
2. Shell or component styles.
3. Selected named theme.
4. High-contrast or monochrome policy.
5. Application overrides.

A later layer wins over an earlier layer even if its selector is less specific. Within a layer, specificity and later-rule order apply. Custom properties and supported text styling inherit; opacity is a composited group effect, not an inherited computed property.

High contrast strengthens distinctions; monochrome maps UI chrome colors to grayscale. Explicit per-widget colors can override policy tokens, so application CSS that sets colors directly must respect accessibility preferences itself.
