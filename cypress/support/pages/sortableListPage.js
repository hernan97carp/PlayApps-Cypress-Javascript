export class SortableList {
 
    constructor(){
        this.url = 'https://qaplayground.dev/apps/sortable-list/'
        this.initialColor = 'rgb(245, 222, 179)'
        this.successColor = 'rgb(58, 227, 116)'
    
        this.richestPeopleList = ['Jeff Bezos', 'Bill Gates', 'Warren Buffett', 'Bernard Arnault', 'Carlos Slim Helu', 'Amancio Ortega', 'Larry Ellison', 'Mark Zuckerberg', 'Michael Bloomberg', 'Larry Page'];
        this.personName = () => cy.get('.draggable .person-name');
        this.checkOrderButton = () => cy.get('[id="check"]')
    }
    targetDraggable(i){
        let targetDraggable = cy.get(`[data-index="${i}"]`).find(".person-name");
        return targetDraggable
    }
    checkOrder(){
       this.checkOrderButton().click()
    }



}