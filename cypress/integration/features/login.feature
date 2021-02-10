#language: pt
Funcionalidade: Fazer Login

  @focus
  Cenário: Realizando login padrão
    Dado que estou registrado no portal
    Quando Insiro as credenciais de login do "Allan" corretamente
    # Então devo ser redirecionado para a Home

  Cenário: Recebendo feedback de erro ao tentar logar
    Dado que estou registrado no portal
    Quando Informo o email "<email>"
    E Informo a senha "<senha>"

