// você pode passar configurações específicas para um Test Suite
// nesse caso o Test Suite vai ter 20 segundo como timeout padrão e não
// será executado quando estive no Firefox
describe('Login', {
  defaultCommandTimeout: 20000,
  browser: '!firefox'
}, () => {

  beforeEach(() => {
    cy.visit('/login');
  });

  // Os comandos não são executados imediatamente. Cypress percorre a função e enfileira
  // os comandos. Assim que a execução da função é finalizada, o Cypress começa a executar
  // os comandos um após o outro. As ações sempre ocorrerão serialmente e nunca paralelamente
  it('should be able to access the portal', {
    // com essa configuração o cypress irá tentar fazer três tentativas antes de falhar
    retries: {
      openMode: 3,
      runMode: 3
    }
  }, () => {
    // cy.get é assíncrono, portanto não é possível 'setar' uma variável com ele
    cy.get('input[formcontrolname=email]')
      .clear()
      .type('renan@gmail.com');

    // cy.screenshot();

    // Cypress.$ retorna o elemento do DOM de maneira síncrona
    // const passwordInput = Cypress.$('input[formcontrolname=password]');
    // passwordInput.trigger('click');

    // O caso do should funciona como o método get. O Cypress irá tentar resolver
    // esse assertion durante um tempo antes de falhar
    cy.get('input[formcontrolname=email]').should($input => {
      expect($input.val()).to.include('rogério');
    });
  });
})
