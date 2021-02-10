declare namespace Cypress {
  interface Chainable {
    /**
     * @description método usado para logar na aplicação
     * @param user
     * @param password
     */
    login(user: string, password: string): Chainable<Element>
  }
}
