export const GerenciamentoMedicamentoPage = {
  getLinhasDaTabelaDeMedicamentos () {
    return cy.get('.medicine-table [mat-row]');
  },
  clicarBotaoDaProximaPaginaDaTabelaDeMedicamentos() {
    cy.get('.mat-paginator-navigation-next').click({ force: true });
  }
};
