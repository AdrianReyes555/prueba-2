const menu = (sequelize, type) => {
    return sequelize.define('menus', {
        idMenu: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        menuName: type.STRING(20),

        crearMenu:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateGerente: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false
    })
}

module.exports = menu