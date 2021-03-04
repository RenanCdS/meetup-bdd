#language: pt
Funcionalidade: Gerenciamento de medicamentos
  O usuário deve ser capaz de visualizar todos os medicamentos cadastrados, bem como gerenciar os mesmos

  Cenário: Visualizar medicamentos
    Dado que possuo medicamentos cadastrados na aplicação
    E estou logado
    Quando acesso a página de listagem de medicamentos
    Então devo ver uma tabela com os medicamentos cadastrados

  Cenário: Tentar visualizar os medicamentos sem êxito
    Dado que possuo medicamentos cadastrados na aplicação
    E estou logado
    Quando acesso a 2 página de listagem de medicamentos
    Então devo ver uma tela de erro informando que não foi possível exibir os medicamentos cadastrados

  Cenário: Tentar remover medicamento sem êxito
    Dado que possuo medicamentos cadastrados na aplicação
    E estou logado
    Quando acesso a página de listagem de medicamentos
    E tento remover algum medicamento sem êxito
    Então devo ver uma tela de erro informando que não foi possível exibir os medicamentos cadastrados

  Cenário: Remover medicamentos
    Dado que possuo medicamentos cadastrados na aplicação
    E estou logado
    Quando acesso a página de listagem de medicamentos
    E removo algum medicamento
    Então devo ver uma tabela atualizada sem o medicamento que foi removido
    E devo ver um feedback informando que o medicamento foi removido com sucesso
