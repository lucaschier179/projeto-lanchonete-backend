(async () => {
  const Categorias = require("../../models/Categorias")

  const novaCategoria = await Categorias.create({
    categoria_nome: "Teste"
  })
})()
