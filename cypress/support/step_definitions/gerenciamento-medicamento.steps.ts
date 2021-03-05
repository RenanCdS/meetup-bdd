import { Given as Dado, When as Quando, Then as Então, And as E } from "cypress-cucumber-preprocessor/steps";
import { ErrorPage } from '../pages/error-page';
import { GerenciamentoMedicamentoPage } from '../pages/gerenciamento-medicamento.page';
import { SnackBarPage } from '../pages/snackbar.page';

Dado('que possuo medicamentos cadastrados na aplicação', () => {
  // Nesse caso poderiamos fazer alguma lógica no back em casos de testes e2e. Como nesse caso estamos trabalhando com o back mockado,
  // não existe nenhuma lógica nesse step
});

E('estou na página de listagem de medicamentos', () => {
});

Quando('acesso a 2 página de listagem de medicamentos', () => {
  GerenciamentoMedicamentoPage.clicarBotaoDaProximaPaginaDaTabelaDeMedicamentos();
});

E('tento remover algum medicamento sem êxito', () => {
  GerenciamentoMedicamentoPage.clicarBotaoDeEdicaoDoMedicamento('aminoxicidil');
});

E('removo o medicamento {string}', (nomeDoMedicamento: string) => {
  GerenciamentoMedicamentoPage.clicarBotaoDeEdicaoDoMedicamento(nomeDoMedicamento);
});

Então('devo ver uma tabela com os medicamentos cadastrados', () => {
  GerenciamentoMedicamentoPage.getLinhasDaTabelaDeMedicamentos()
                              .should('exist');
});

Então('devo ver uma tela de erro informando que não foi possível exibir os medicamentos cadastrados', () => {
  ErrorPage.getMensagemDeErro().should('contain', 'Infelizmente ocorreu um erro :(');
});

Então('devo ver uma tabela atualizada sem o medicamento {string} na lista', (nomeDoMedicamento: string) => {
  GerenciamentoMedicamentoPage.getLinhasDaTabelaDeMedicamentos()
                              .should('not.contain', nomeDoMedicamento);
});

E('devo ver um feedback informando que o medicamento foi removido com sucesso', () => {
  SnackBarPage.getSnackbar().should('contain', 'medicamento deletado com sucesso');
});

