const db = require('./guessWhoConfig.js');

const getUsers = _ => {
    return db('users');
}

const getUsersByName = (name) => {
    return db("users").where({ name: name });
}

module.exports = {
    getUsers,
    getUsersByName
}