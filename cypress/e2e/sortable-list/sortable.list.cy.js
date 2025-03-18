
describe('Sortable List',()=>{
  let richestPeople = ['Jeff Bezos', 'Bill Gates', 'Warren Buffett', 'Bernard Arnault', 'Carlos Slim Helu', 'Amancio Ortega', 'Larry Ellison', 'Mark Zuckerberg', 'Michael Bloomberg', 'Larry Page'];
  
      beforeEach(() => {
          cy.goto("https://qaplayground.dev/apps/sortable-list/")
      });
      it('TC1: Should have the correct base color for each person name', () => {
        cy.get('.draggable .person-name').each((element) => {
          cy.wrap(element)
            .should('have.css', 'color', 'rgb(245, 222, 179)');
        });
      });
      it('TC2: Drag and drop the items into their corresponding spots',()=>{

       for(let i = 0; i < richestPeople.length; i++){
        let eachRichPeople = richestPeople[i]
  
        const sourceDraggable = cy.get('.draggable .person-name').contains(eachRichPeople);
        const targetDraggable = cy.get(`[data-index="${i}"]`).find(".person-name");
        sourceDraggable.trigger('dragstart', { dataTransfer: {} });
        targetDraggable.trigger('dragenter');
        targetDraggable.trigger('dragover', { dataTransfer: {} });
        targetDraggable.trigger('drop', { dataTransfer: {} });
        sourceDraggable.trigger('dragend');
        targetDraggable.should('contain', eachRichPeople);
      
       }
       cy.get('[id="check"]').click().then(()=>{
        cy.get('.draggable .person-name').each((element) => {
          cy.wrap(element) // "envolver" el elemento para usar Cypress comandos
            .should('have.css', 'color', 'rgb(58, 227, 116)');
        });
       })
          
      })
  
  })