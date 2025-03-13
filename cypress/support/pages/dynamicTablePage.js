export class DynamicTablePage {
    constructor() {
        this.url = "https://qaplayground.dev/apps/dynamic-table/";
        this.heroAliasSpiderMan = () => cy.contains('Spider-Man');
        this.nameHeroSpiderMan = () => cy.get('tr').contains('td', 'Peter Parker').parents('tr').find('td:last-child') 
        this.spiderManHero = {
          "alias": "Spider-Man",
          "name" : "Peter Parker"
        }
    
    }

    getHeroAliasSpiderMan() {
        return this.heroAliasSpiderMan().invoke('text').then((text) => text.trim());
    }

    getNameHeroSpiderMan(){
        return this.nameHeroSpiderMan().invoke('text').then((text)=> text.trim() );
    }
}