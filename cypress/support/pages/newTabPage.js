export class NewTabPage {
  constructor() {
    this.baseUrl = 'https://qaplayground.dev/apps/new-tab/';
    this.newTabPath = '/apps/new-tab/';

    this.openButton = () => cy.get('#open');
    this.targetBlankLink = () => cy.get('a[target="_blank"]');
    this.welcomeMessage = () =>
      cy.get('div#wrapper').find('h1').contains('Welcome to the new page!');
  }

  removeTargetBlankAttribute() {
    this.targetBlankLink().invoke('removeAttr', 'target');
  }

  clickOpenButton() {
    this.openButton().click();
  }
}
