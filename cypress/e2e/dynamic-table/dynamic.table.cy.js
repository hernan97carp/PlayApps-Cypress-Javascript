describe('Testing Dynamic table mini application', () => {
    let heroAlias;
    let realName;
  
    it('TC:01 Find the username Peter Parker', () => {
      cy.visit('https://qaplayground.dev/apps/dynamic-table/');
  
      // Find "Spider-Man" alias and store it
      cy.contains('Spider-Man').then(($name) => {
        heroAlias = $name.text().trim(); // Store the cleaned alias
        expect(heroAlias).to.equal('Spider-Man'); // Assert that alias is exactly 'Spider-Man'
      });
  
      cy.get('tr')
        .contains('td', 'Peter Parker') // Find <td> element that contains 'Peter Parker'
        .parents('tr') // Get the <tr> row that contains 'Peter Parker'
        .find('td:last-child') // Select the last <td> element within that row
        .invoke('text') // Extract the text from the <td>
        .then(($text) => {
          realName = $text.trim(); // Store the cleaned real name
          expect(realName).to.equal('Peter Parker'); // Assert that real name is 'Peter Parker'
        });
    });
  });