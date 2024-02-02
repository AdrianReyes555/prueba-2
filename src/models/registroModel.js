const registro = (sequelize, type) => {
    return sequelize.define('registros', {
        idRegistro: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullname: type.STRING,
        username: type.STRING,
        email: type.STRING,
        password: type.STRING,
        
        crearRegistro:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateRegistro: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false
    })
}

module.exports = registroM