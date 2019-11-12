export const schema = {
  name: {
    input: {
      name: "name",
      type: "text",
      placeholder: "seu nome",
      class: "css-class"
    }
  },
  password: [
    {
      input: {
        type: "text",
        placeholder: "digite sua senha"
      }
    },
    {
      input: {
        type: "text",
        placeholder: "confirme sua senha"
      }
    },
    {
      input: {
        type: "number",
        placeholder: "seu celular"
      }
    },
    {
      input: {
        placeholder: "Ola td bem",
        label: "CPF",
        defaultValue: "Digite seu cpf"
      }
    }
  ]
};
