describe('signUp / register', () => {
  it('should be able to add login and password', () => {
    cy.visit('/signup');
    cy.get('#email').type('fake@gmail.com');
  });
});