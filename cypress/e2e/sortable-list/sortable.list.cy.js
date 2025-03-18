import { SortableList } from '../../support/pages/sortableListPage';
describe('Sortable List', () => {
  const page = new SortableList();

  beforeEach(() => {
    cy.goto(page.url);
  });
  it('TC1: Should have the correct base color for each person name', () => {
    page.personName().each((element) => {
      cy.wrap(element).should('have.css', 'color', page.initialColor);
    });
  });
  it('TC2: Drag and drop the items into their corresponding spots', () => {
    for (let i = 0; i < page.richestPeopleList.length; i++) {
      let richPerson = page.richestPeopleList[i];

      const sourceDraggable = page.personName().contains(richPerson);
      const targetDraggable = page.targetDraggable(i);
      sourceDraggable.trigger('dragstart', { dataTransfer: {} });
      targetDraggable.trigger('dragenter');
      targetDraggable.trigger('dragover', { dataTransfer: {} });
      targetDraggable.trigger('drop', { dataTransfer: {} });
      sourceDraggable.trigger('dragend');
      targetDraggable.should('contain', richPerson);
    }
    page.checkOrder();
    page.personName().each((element) => {
      cy.wrap(element) // "envolver" el elemento para usar Cypress comandos
        .should('have.css', 'color', page.successColor);
    });
  });
});
