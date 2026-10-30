---
title: Inputs and forms
---

## Choose an input

| Input | API | Use |
| --- | --- | --- |
| Text | `Widget::TextInput(TextEdit::new(text)?)` | Single-line text. |
| Password | `TextEdit::new(text)?.with_mode(InputMode::Password)?` | Masked text. |
| Multiline | `TextEdit::multiline(text)?` | Text with multiple lines. |
| Search | `TextEdit::new(text)?.with_mode(InputMode::Search)?` | Search input; Escape clears it. |
| Numeric | `InputMode::Numeric { min, max, step }` | Stepped numeric input with range checks. |
| Slider | `Widget::Slider(Slider::new(min, max, value, step)?)` | Select a numeric value within a range. |
| Dropdown | `Widget::Dropdown` | Choose from a menu of items. |
| Combo box | `Widget::ComboBox` | Editable input with filtered suggestions. |
| Color picker | `Element::color_picker` | Choose an RGBA color. |

## Create and handle a text input

```rust
use knave_ui::toolkit::*;

let name = Element::new(10, Widget::TextInput(TextEdit::new("")?));
```

Match `Action::TextChanged(ElementId(10), text)` to receive edits and `Action::Submitted(ElementId(10), text)` on submission. The application decides how to use or persist the value. See [Elements and state](/ui/elements-state/).

## Behavior and styling

Text editing is grapheme-aware. Multiline Enter inserts a newline; Ctrl+Enter submits. Password values are masked in display and clipboard operations. Numeric inputs support validation and stepping.

Use selectors such as `text-input:focus` and `text-input:invalid`; see [states](/css/states/). The [gallery](/ui/getting-started/) demonstrates each input.
