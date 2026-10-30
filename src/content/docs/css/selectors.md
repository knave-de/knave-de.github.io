---
title: Selectors
---

Knave UI uses CSS to style widgets and their painted parts. Its styling engine supports a defined subset of CSS, so browser stylesheets may need changes before they work here.

## Selector syntax

Select an element by type (`button`), class (`.custom-class`), or style ID (`#element-id`). Use a space for a descendant, commas for a selector list, and `*` to match retained elements. CSS block comments (`/* ... */`) are supported.

```css
button.primary:hover { background: #585b70; }
slider slider-thumb { background: var(--accent); }
```

See [pseudo-classes and states](/css/states/), [theme variables](/css/variables/), and [cascade and inheritance](/css/cascade/) for those parts of the language.

To assign a class or style ID in Rust and apply a stylesheet, follow [Styling elements](/ui/styling/). For classes supplied by the desktop shell, see [Shell styling](/desktop/styling/getting-started/).

## Elements

Every retained widget has a type selector:

- `panel`, `text`, `paragraph`, `icon`, `image`, `scene-snapshot`,
  `pagination`, `color-swatch`, `collection`, `progress`, `spinner`, `toast`;
- `button`, `link`, `checkbox`, `mixed-checkbox`, `toggle` (also `switch`),
  `slider`, `splitter`, `disclosure`, `text-input`, `combo-box`, `dropdown`,
  `context-menu`, `menu`, `selectable`, `draggable`, `separator`, `scroll`,
  `popup` (also `dialog` for modal popups).

More specific selectors match the same element as well as its underlying type:

- `heading`, `h1`, `h2`, `h3`; `subtitle`, `caption`, `badge`, `alert`,
  `section`, `card`, `empty-state`, `split-button`, `breadcrumbs`,
  `command-palette`, `expander`, `accordion`, `split-view`, `color-picker`;
- `button.primary`, `button.secondary`, `button.ghost`, `button.destructive`,
  `button.icon`; use `button:busy` for loading buttons;
- `password-input`, `multiline-input`, `search-input`, `numeric-input`;
- `tabs`, `sidebar`, `radio-group`, `segmented-control`, `chip-group`, `list`,
  `icon-grid`, `tree`, `table`; group children can match `tab`, `sidebar-item`,
  `radio`, `segment`, `chip`, `list-item`, `grid-item`;
- `row`, `column`, `grid`, `overlay` for corresponding panel layouts;
  `navigation`, `status` and `alert` for matching semantic roles.

Use `Element::heading`, `Element::subtitle` and `Element::caption` to mark
text for the respective semantic selectors. Inline `Element::span(id, text)`
children of `Widget::Paragraph` are selectable as `span` and can carry classes
and IDs; `Scene::set_text(id, text)` updates them without rebuilding the
paragraph. Span color, family, size, style and weight are rendered inline.
Inline backgrounds, borders, dimensions and independent hit targets are not
supported. Composed constructors retain their
component identity, and applications can mark custom compositions with
`Element::component(ComponentKind::...)`. Ordinary text without that metadata
continues to match `text`, but does not automatically become a subtitle. Classes
and style IDs are supplied by the application on individual elements.

`:hover` on retained elements follows the toolkit's interactive hit testing;
painted parts below use their own hit area. State selectors match applicable
widget state, so for example `:checked` applies to checkboxes, switches and
selected selectable items; `:invalid` applies to invalid input.

## Painted parts

These selectors address pieces painted inside a widget. They can be scoped to an
owner with a descendant selector, such as `slider slider-thumb` or
`dropdown menu-surface menu-item`:

- `checkbox-indicator`, `checkbox-mark`, `switch-track`, `switch-thumb`;
- `slider-track`, `slider-fill`, `slider-thumb`, `progress-track`,
  `progress-fill`, `spinner-dot`;
- `text-selection`, `text-caret`, `scrollbar-thumb`;
- `menu-surface`, `menu-item`, `menu-separator`, `collection-item`,
  `table-header`, `table-cell`.

Parts accept `background`/`background-color`, `color`, `opacity`, border
widths/colors and corner radii. Text-bearing parts (`checkbox-mark`, `menu-item`,
`collection-item`, `table-header`, `table-cell`) also accept typography. Part
geometry is fixed by the control: padding, margin, gap and outline are not
supported on parts. Their text is clipped to the existing row/cell geometry.
`checkbox-mark` also accepts CSS `content` with a quoted string or `none`
to replace or hide its generated glyph. Parts have no individual class or ID.
Menu and collection item states describe
individual rows; a part's hover is its painted hit area. Wildcard selectors
match retained elements, not the parts.

`canvas`, `surface`, `modal-overlay` and `tooltip` are global auxiliary
selectors, without classes, IDs, ancestors or state selectors. All support a
background; tooltip also supports text properties, padding and corner radii.

## Related references

See [properties and values](/css/properties/) for declarations and [limitations](/css/limitations/) for fixed geometry and unsupported syntax.

This reference is based on the Knave UI styling implementation and its [theme selector reference](https://github.com/knave-de/knave-ui/blob/master/docs/architecture/theme-selectors.md).
