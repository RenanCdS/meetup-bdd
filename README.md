# Meetup BDD - Cucumber com Cypress
Por favor, faça o download da extensão [CodeTour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour) para ter um overview da configuração do Cucumber no Cypress.

Após instalada a extensão, por favor veja todos os tours clicando no play.
![imagem do tour](https://github.com/RenanCdS/meetup-bdd/blob/master/img-tour.PNG?raw=true)

## Testes automatizados
Na pasta `cypress/integration/features` estão os arquivos [GHERKIN](https://cucumber.io/docs/gherkin/reference/).
Na pasta `cypress/support/step_definitions` estão as implementações dos steps GHERKIN.

Foi usado o [Wiremock](https://www.npmjs.com/package/wiremock) para mockar os endpoints do backend.
Na pasta `mappings` ficam os arquivos que possuem as configurações para fazer o "match" dos endpoints.
Na pasta `__files` ficam os arquivos com os retornos mockados.

Os mocks estão organizados conforme a estrutura dos diretórios. Por exemplo, o endpoint "/api/v1/medicines" está estrturado da seguinte forma `mappings => api => v1 => medicines`.

