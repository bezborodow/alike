# Highlight Alike Cells in a Table

[Example.](https://bezborodow.github.io/alike/examples/)
Installation:

```console
npm install table-cells-alike
```

## Usage

Import:

```javascript
/**
 * Highlight alike table cells.
 */
import TableCellsAlike from 'table-cells-alike';
const alike = new TableCellsAlike();
alike.attach(document);
```

Define highlight style:

```css
.alike {
    background-color: aliceblue;
}
```

Define which columns should be highlighed:

```html
    <thead>
        <tr>
            <th scope="col">Project Code</th>
            <th scope="col">Project Name</th>
            <th scope="col" class="highlight-alike">Account</th>
            <th scope="col" class="highlight-alike">Assignee</th>
        </tr>
    </thead>
```
