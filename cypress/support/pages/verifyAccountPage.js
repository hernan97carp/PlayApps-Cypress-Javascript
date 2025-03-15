export class VerifyAccountPage {
  constructor() {
    this.inputs = () => cy.get('input[type="number"]');
    this.url = 'https://qaplayground.dev/apps/verify-account/';
    this.textSuccess = () => cy.get('.info.success');
    this.backgroundSuccess = 'rgb(0, 128, 0)';
    this.confirmButton = () => cy.get('.info.success');
  }


  fillInputs() {
    this.inputs().each(($input) => {
      cy.wrap($input).type('9');
    });
    this.confirmButton().click();
  }

  getTextSuccess() {
    return this.textSuccess()
      .invoke('text')
      .then((text) => text.trim());
  }

  verifySuccessColor() {
    return this.textSuccess().should(
      'have.css',
      'background-color',
      this.backgroundSuccess,
    );
  }
}
