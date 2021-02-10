
export const users = {
  "Allan": {
    email: "allan_automacao@gmail.com",
    senha: "Teste123"
  }
}

export const getUser = (user: string) => {
  return users[user];
}
