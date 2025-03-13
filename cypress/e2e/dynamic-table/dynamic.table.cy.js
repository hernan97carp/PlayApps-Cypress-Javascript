import { DynamicTablePage } from "../../support/pages/dynamicTablePage";

describe('Testing Dynamic Table mini application', () => {
    const dynamicTablePage = new DynamicTablePage();
    
    beforeEach(() => {
        cy.visit(dynamicTablePage.url);
    });

    it('TC:01 Find the username Peter Parker', () => {
        dynamicTablePage.getHeroAliasSpiderMan().then((alias) => {
            expect(alias).to.equal(dynamicTablePage.spiderManHero.alias); 
        });

        dynamicTablePage.getNameHeroSpiderMan().then((name) => {
            expect(name).to.equal(dynamicTablePage.spiderManHero.name);
        });
    });
});