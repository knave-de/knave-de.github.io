---
title: Collections
---

Collections present application-supplied data. Items have stable identities, and the toolkit paints visible rows rather than creating an element for every item.

## Choose a collection

| Collection | Purpose | Keyboard behavior |
| --- | --- | --- |
| List | Present selectable rows. | Arrows and Home/End navigate enabled items. |
| Icon grid | Present items in a grid. | Arrow navigation follows the column stride. |
| Tree | Present hierarchical items. | Right expands or enters; Left collapses or moves to the parent. |
| Table | Present rows and columns. | Left/Right selects a column; Ctrl+Space toggles sorting. |

## Handle actions

| Action | Meaning |
| --- | --- |
| `Action::Selected(owner, item)` | An item was selected. |
| `Action::ItemActivated(owner, item)` | An item was activated. |
| `Action::Expanded(owner, item, expanded)` | A tree item changed expansion state. |
| `Action::Sorted(owner, column, descending)` | A table's sorting changed. |

The application supplies the data. Collections do not fetch files or provide spreadsheet editing. Try the [gallery](/ui/getting-started/) for complete examples and see [Elements and state](/ui/elements-state/) for action handling.
