const restaurante = {}

restaurante.mostrar = async (req, res) => {
    res.render('restaurante/listar')
}

module.exports = restaurante