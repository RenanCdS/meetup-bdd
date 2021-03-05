export const GerenciamentoMedicamentoPage = {
  getLinhasDaTabelaDeMedicamentos () {
    return cy.get('.medicine-table [mat-row]');
  },
  getLinhaDaTabelaComOMedicamento (nomeDoMedicamento: string) {
    return cy.get('[mat-row]').contains(nomeDoMedicamento);
  },
  clicarBotaoDaProximaPaginaDaTabelaDeMedicamentos() {
    cy.get('.mat-paginator-navigation-next').click({ force: true });
  },
  clicarBotaoDeEdicaoDoMedicamento (nomeDoMedicamento: string) {
    cy.get(`[data-delete=${nomeDoMedicamento}]`)
                      .click({ force: true });
  }
};
