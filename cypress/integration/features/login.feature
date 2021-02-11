#language: pt
Funcionalidade: Fazer Login


  Cenário: Realizando login padrão com sucesso
    Dado que não estou autenticado no portal
    Quando Insiro as credenciais de login "allan@gmail.com" e "Teste123"
    Então devo ser redirecionado para a Home

  Cenário: Recebendo feedback de erro ao inserir senha inválida
    Dado que não estou autenticado no portal
    Quando Insiro as credenciais de login "allan@gmail.com" e "TesteErro"
    Então devo ver um feedback informando que as credencias estão incorretas

  Cenário: Validando os campos sem preenchimento
    Dado que não estou autenticado no portal
    Quando clico no botão de login sem preencher as informações de login
    Então devo receber feedbacks nos campos não preenchidos

  Esquema do Cenário: Validando o campo de e-mail
    Dado que não estou autenticado no portal
    Quando Insiro as credenciais de login "<email>" e "Teste"
    Então devo ver um feedback com um erro referente a "<tipoDeErro>" no formulário
  Exemplos:
    | email                   | tipoDeErro                              |
    | allan@                  | email inválido                          |
    |                         | obrigatoriedade de preenchimento        |


