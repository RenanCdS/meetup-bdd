describe('Login', () => {

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should be able to access the portal', () => {
    cy.get('input[formcontrolname=email]')
      .clear()
      .type('renan@gmail.com');
  });
})
