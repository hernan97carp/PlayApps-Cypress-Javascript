import { NewTabPage } from '../../support/pages/newTabPage';
describe('Test new Tab open', () => {
  it('TC1: Verify whether the new tab is opened', () => {
    const newTabPage = new NewTabPage();
    cy.visit(newTabPage.baseUrl);
    newTabPage.removeTargetBlankAttribute();
    newTabPage.clickOpenButton();
    cy.url().should('include', newTabPage.newTabPath);
    newTabPage.welcomeMessage().should('exist');
  });
});
