#language: pt
Funcionalidade: Fazer Login
  O usuário deve ser capaz de se autenticar para acessar as funcionalidades da aplicação
  caso o mesmo tenha credenciais válidas

  Cenário: Realizar login com sucesso
    Dado que não estou autenticado no portal
    Quando Insiro as credenciais de login "allan@gmail.com" e "Teste123"
    E logo na aplicação
    Então devo ser redirecionado para a Home

  Cenário: Tentar realizar login com senha inválida
    Dado que não estou autenticado no portal
    Quando Insiro as credenciais de login "allan@gmail.com" e "TesteErro"
    E logo na aplicação
    Então devo ver um feedback informando que as credencias estão incorretas

  Cenário: Tentar realizar login com campos não preenchidos
    Dado que não estou autenticado no portal
    Quando tento logar sem preencher as informações de login
    Então devo receber feedbacks nos campos não preenchidos

  Esquema do Cenário: Tentar realizar login com campo e-mail inválido
    Dado que não estou autenticado no portal
    Quando Insiro as credenciais de login "<email>" e "Teste"
    Então devo ver um feedback com um erro referente a "<tipoDeErro>" no formulário
  Exemplos:
    | email                   | tipoDeErro                              |
    | allan@                  | email inválido                          |
    |                         | obrigatoriedade de preenchimento        |


