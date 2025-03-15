import { VerifyAccountPage } from '../../support/pages/verifyAccountPage';

describe('Verify Account Test', () => {
  const verifyAccountPage = new VerifyAccountPage();

  beforeEach(() => {
   cy.goto(verifyAccountPage.url)
  });

  it('Fill all the inputs and verify success message with green background', () => {
    verifyAccountPage.fillInputs();
    verifyAccountPage.getTextSuccess().then((success) => {
      expect(success).to.equal('Success');
      verifyAccountPage.verifySuccessColor();
    });
  });
});
