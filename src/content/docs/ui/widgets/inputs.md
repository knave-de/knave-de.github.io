---
title: Inputs and forms
---

Knave UI supports text, password, multiline, search and numeric input, plus sliders, dropdowns, editable combo boxes and a color picker. Applications receive actions such as `TextChanged`, `Submitted`, `ValueChanged`, and `ValueCommitted`, together with the element identity.

Text editing is grapheme-aware. Password fields mask their values; search supports clearing with Escape, and numeric controls support steps and range validation. Use the [widget gallery](/ui/getting-started/) to try each control and inspect its constructor in the gallery source.

Input states can be styled with selectors such as `text-input:focus` and `text-input:invalid`; see [states](/css/states/).
