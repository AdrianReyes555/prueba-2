const menu = {}

menu.mostrar = async (req, res) => {
    res.render('menu/lista_menu')
}

module.exports = menu