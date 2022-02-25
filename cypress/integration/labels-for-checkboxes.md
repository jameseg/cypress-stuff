# Labels for Checkboxes

<!-- fiddle Labels for checkboxes -->

```html
<input type="checkbox" id="apples" checked />
<label for="apples">I ❤️ apples</label><br />
<input type="checkbox" id="apples" />
<label for="peaches">I ❤️ peaches</label><br />
<input type="checkbox" id="grapes" checked />
<label for="grapes">I ❤️ grapes</label><br />
<input type="checkbox" id="mango" />
<label for="mangos">I ❤️ mangos</label><br />
```

```js
const labels = []
cy.get('input[type=checkbox]')
  .should('have.length', 4)
  .filter(':checked')
  .each(($checkbox) => {
    const id = $checkbox.attr('id')
    cy.get(`label[for="${id}"]`)
      .invoke('text')
      .then((s) => labels.push(s))
  })
cy.wrap(labels).should('deep.equal', ['I ❤️ apples', 'I ❤️ grapes'])
```

<!-- fiddle-end -->
