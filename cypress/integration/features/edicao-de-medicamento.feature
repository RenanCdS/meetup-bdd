#language: pt
# TODO: Implementar os steps
Funcionalidade: Edição de medicamentos
  O usuário deve ser capaz de editar um medicamento previamente selecionado

  Cenário: Editar medicamento exibido na lista de medicamentos com êxito
    Dado que possuo medicamentos cadastrados na aplicação
    E estou logado
    E estou na página de listagem de medicamentos
    Quando seleciono a opção de editar algum dos medicamentos
    E altero as informações do medicamento com sucesso
    Então devo ver a lista de medicamentos com o medicamento atualizado
    E devo ver um feedback informando que o medicamento foi atualizado com sucesso

  Cenário: Editar medicamento exibido na lista de medicamentos sem êxito
    Dado que possuo medicamentos cadastrados na aplicação
    E estou logado
    E estou na página de listagem de medicamentos
    Quando seleciono a opção de editar algum dos medicamentos
    E altero as informações do medicamento sem sucesso
    Então devo ver um feedback informando que houve um erro ao atualizar as informações do medicamento
