const menu = {}
const path = require('path')

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

menu.show = (req, res) => {
    res.render('menu/lista_menu');
}
menu.sendCarsadd = async (req, res) => {
    const id = req.user.idUsers
    const { idMenu, menuName, menuImagen} = req.body
    const newSend = {
        menuName,
        menuImagen,

        userIdUsers: id
    }
    await orm.platform.create(newSend)

    const menusImagen = req.files.imageCars;
    const validacion = path.extname(menusImagen.name);
    const extencion = [".PNG", ".JPG", ".JPEG", ".GIF", ".TIF", ".png", ".jpg", ".jpeg", ".gif", ".tif"];

    if (!extencion.includes(validacion)) {
        req.flash("success", "Imagen no compatible.");
    }

    if (!req.files) {
        req.flash("success", "Imagen no insertada.");
    }

    const ubicacion = __dirname + "/../public/img/menu/" + menusImagen.name;

    menusImagen.mv(ubicacion, function (err) {
        if (err) {
            return req.flash("message", err);
        }
        sql.query("UPDATE menu SET menuImagen = ? WHERE idmenu = ?", [
            menuImagen.name,
            idUsers,
        ]);
        console.log("Imagen de usuario ingresada");
    });
    res.redirect('/menu/lista_menu/' + id);
}

menu.traerMenu = async (req, res) => {
    const id = req.params.id
    const list = await sql.query('select * from menu where idMenu = ?', [id])
    res.render('menu/lista_menu/', { list })
}

menu.updateMenu = async (req, res) => {
    const id = req.user.idUsers
    const { idMenu, menuName, menuImagen} = req.body
    const newSend = {
        menuName,
        menuImagen,

        userIdUsers: id
    }
    const menusImagen = req.files.imageRestaurante;
    const validacion = path.extname(menusImagen.name);
    const extencion = [".PNG", ".JPG", ".JPEG", ".GIF", ".TIF", ".png", ".jpg", ".jpeg", ".gif", ".tif"];

    if (!extencion.includes(validacion)) {
        req.flash("success", "Imagen no compatible.");
    }

    if (!req.files) {
        req.flash("success", "Imagen no insertada.");
    }

    const ubicacion = __dirname + "/../public/img/menu/" + menuImagen.name;

    menusImagen.mv(ubicacion, function (err) {
        if (err) {
            return req.flash("message", err);
        }
        sql.query("UPDATE menu SET menuImagen = ? WHERE idMenu = ?", [
            imagenUsuario.name,
            idMenu,
        ]);
        console.log("Imagen de usuario ingresada");
    });
    res.redirect('/menu/lista_menu/' + id);
}

module.exports = menu