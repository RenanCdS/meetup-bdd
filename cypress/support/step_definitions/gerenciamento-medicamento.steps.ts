import { Given as Dado, When as Quando, Then as Então, And as E } from "cypress-cucumber-preprocessor/steps";
import { GerenciamentoMedicamentoPage } from '../pages/gerenciamento-medicamento.page';

Dado('que possuo medicamentos cadastrados na aplicação', () => {

});

Quando('acesso a página de listagem de medicamentos', () => {

});

Quando('acesso a 2 página de listagem de medicamentos', () => {
  GerenciamentoMedicamentoPage.clicarBotaoDaProximaPaginaDaTabelaDeMedicamentos();
});

E('tento remover algum medicamento sem êxito', () => {

});

E('removo algum medicamento', () => {

});

Então('devo ver uma tabela com os medicamentos cadastrados', () => {
  GerenciamentoMedicamentoPage.getLinhasDaTabelaDeMedicamentos()
                              .should('exist');
});

Então('devo ver uma tela de erro informando que não foi possível exibir os medicamentos cadastrados', () => {

});

Então('devo ver uma tabela atualizada sem o medicamento que foi removido', () => {

});

E('devo ver um feedback informando que o medicamento foi removido com sucesso', () => {

});

