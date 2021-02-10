import { Given as Dado, When as Quando } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../pages/login.page";

Dado('que estou registrado no portal', () => {

});

Quando('Insiro as credenciais de login do {string} corretamente', (user: string) => {
  LoginPage.login(user);
});
