export const SnackBarPage = {
  getSnackbar() {
    return cy.get('.mat-simple-snackbar', { timeout: 20000 });
  }
}
