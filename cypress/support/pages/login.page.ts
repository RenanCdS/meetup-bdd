import { getUser } from "../utils/users-store"

export const LoginPage = {
  login(user) {
    const currentUser = getUser(user);
    cy.login(currentUser.email, currentUser.senha);
  }
}
