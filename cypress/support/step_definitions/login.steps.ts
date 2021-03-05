import { Given as Dado, When as Quando, Then as Então, And as E } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../pages/login.page";
import { SnackBarPage } from '../pages/snackbar.page';

Dado('que não estou autenticado no portal', () => {
  cy.visit('/login');
  cy.clearLocalStorage();
});

Dado('estou logado', () => {
  cy.visit('/login');
  LoginPage.login('teste@gmail.com', 'Teste123');
  LoginPage.clicarBotaoDeLogin();
});

Quando('Insiro as credenciais de login {string} e {string}', (email: string, senha: string) => {
  LoginPage.login(email, senha);
});

Quando('tento logar sem preencher as informações de login', () => {
  LoginPage.clicarBotaoDeLogin();
});

E('logo na aplicação', () => {
  LoginPage.clicarBotaoDeLogin();
});

Então('devo ser redirecionado para a Home', () => {
  cy.url({ timeout: 20000 }).should('contain', 'home');
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
  LoginPage.getErroDoCampoDeEmail().should('contain', 'Campo obrigatório');
});

