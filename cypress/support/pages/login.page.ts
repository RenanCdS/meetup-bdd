export const LoginPage = {
  login(email: string, senha: string) {
    cy.login(email, senha);
  },
  getErroDoCampoDeEmail() {
    return cy.get('.mat-error').first();
  },
  clicarBotaoDeLogin() {
    cy.get('.mat-raised-button')
      .contains('Entrar')
      .click({ force: true });
  }
}
