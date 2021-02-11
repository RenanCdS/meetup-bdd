import { Given as Dado, When as Quando, Then as Então } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../pages/login.page";
import { SnackBarPage } from '../pages/snackbar.page';

Dado('que estou registrado no portal', () => {

});

Dado('que não estou autenticado no portal', () => {
  cy.visit('/login');
});

Quando('Insiro as credenciais de login {string} e {string}', (email: string, senha: string) => {
  LoginPage.login(email, senha);
});

Quando('Insiro as credenciais de login do {string} corretamente', (user: string) => {
  // LoginPage.login(user);
});

Quando('devo ver um feedback com um erro referente a {string}', () => {

});

Quando('clico no botão de login sem preencher as informações de login', () => {
  LoginPage.clicarBotaoDeLogin();
});

Então('devo ser redirecionado para a Home', () => {
  cy.url().should('contain', 'home');
});

Então('devo ver um feedback informando que as credencias estão incorretas', () => {
  SnackBarPage.getSnackbar().should('be.visible');
});

Então(/devo ver um feedback com um erro referente a "([^"]*)" no formulário/, (tipoDeErro: string) => {
  const tiposDeErro = {
    'email inválido': 'E-mail inválido',
    'obrigatoriedade de preenchimento': 'Campo obrigatório'
  }
  const textoDoErro = tiposDeErro[tipoDeErro];
  LoginPage.getErroDoCampoDeEmail().should('contain', textoDoErro);
});

Então('devo receber feedbacks nos campos não preenchidos', () => {

});

