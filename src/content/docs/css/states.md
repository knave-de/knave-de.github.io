---
title: Pseudo-classes and states
---

Pseudo-classes match an element when its state applies. For example:

```css
button.primary:hover { background: #585b70; }
button:disabled { opacity: 0.5; }
```

| State | Matches |
| --- | --- |
| `:hover` | The element under the pointer, according to interactive hit testing. Painted parts use their own hit area. |
| `:focus` | The focused element. |
| `:pressed`, `:active` | A pressed element; `:active` is an alias. |
| `:selected`, `:checked`, `:indeterminate` | Applicable selection or checked state. |
| `:expanded`, `:invalid`, `:busy` | Applicable expanded, validation, or busy state. |
| `:enabled`, `:disabled` | Applicable enabled state. |
| `:root` | The root element. |

A state only matches where the widget exposes it. See [selectors](/css/selectors/) for widget types and painted parts.
