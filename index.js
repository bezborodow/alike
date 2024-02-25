/**
 * Highlight alike table cells.
 */
export default class TableCellsAlike {
  #options;
  #listening = [];

  constructor(options = {}) {
    this.#options = Object.assign({}, options);
    this.#listening = [];
  }

  attach(target) {
    target.addEventListener('mouseover', this.onMouseOver.bind(this));
  }

  onMouseOver(e) {
    if (!e.target.matches('td'))
      return;

    const index = e.target.cellIndex;
    const table = e.target.closest('table');
    const th = table.querySelectorAll('thead th')
      .item(index);

    if (!th || !th.classList.contains('highlight-alike'))
      return;

    if (!this.#listening.includes(e.target)) {
      this.#listening.push(e.target);
      e.target.addEventListener('mouseleave', e => {
        for (const td of table.querySelectorAll('td'))
          td.classList.remove('alike');
      });
    }

    for (const td of table.querySelectorAll('td')) {
      if (td.cellIndex != index)
        continue;
      if (!td.textContent.trim())
        continue;
      if (td.textContent == e.target.textContent)
        td.classList.add('alike');
    }
  }
}
