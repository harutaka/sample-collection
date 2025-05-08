const Sequelize = require('sequelize');
const sequelize = new Sequelize('database','','',{dialect: "sqlite", storage:"./dbapp.db"});

let model = {};
model.books = sequelize.define('books', {
    bookid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.TEXT,
    },
    price: {
        type: Sequelize.INTEGER,
    }
},{
    freezeTableName: true,
    timestamps: false,
});
model.users = sequelize.define('users', {
    username: {
        type: Sequelize.TEXT,
        primaryKey: true,
    },
    password: {
        type: Sequelize.TEXT,
    },
}, {
    freezeTableName: true,
    timestamps: false,
})

module.exports = model;