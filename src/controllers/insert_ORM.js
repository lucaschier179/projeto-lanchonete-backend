(async () => {
  const Categorias = require("../../models/cardapio")

  const novaCategoria = await Categorias.create({
    categoria_nome: "Teste"
  })
})()
