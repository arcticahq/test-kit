Feature('home');

Scenario('test something', (I) => {
  I.amOnPage('http://localhost:9000');
  I.see('ABOUT', 'h1')
  I.click("Let's talk")
  I.see('CONTACT', 'h1')
  I.fillField('Name', 'David')
  I.click('Send message');
  I.see('ERROR')
});
