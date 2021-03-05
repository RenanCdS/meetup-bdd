#language: pt
Funcionalidade: Gerenciamento de medicamentos
  O usuário deve ser capaz de visualizar todos os medicamentos cadastrados, bem como gerenciar os mesmos

  Cenário: Tentar visualizar os medicamentos sem êxito
    Dado que possuo medicamentos cadastrados na aplicação
    E estou logado
    E estou na página de listagem de medicamentos
    Quando acesso a 2 página de listagem de medicamentos
    Então devo ver uma tela de erro informando que não foi possível exibir os medicamentos cadastrados

  Cenário: Tentar remover medicamento sem êxito
    Dado que possuo medicamentos cadastrados na aplicação
    E estou logado
    E estou na página de listagem de medicamentos
    Quando tento remover algum medicamento sem êxito
    Então devo ver uma tela de erro informando que não foi possível exibir os medicamentos cadastrados

  Cenário: Remover medicamento com êxito
    Dado que possuo medicamentos cadastrados na aplicação
    E estou logado
    E estou na página de listagem de medicamentos
    Quando removo o medicamento "dipirona"
    Então devo ver uma tabela atualizada sem o medicamento "dipirona" na lista
    E devo ver um feedback informando que o medicamento foi removido com sucesso
