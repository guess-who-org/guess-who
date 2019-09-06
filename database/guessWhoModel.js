const db = require('./guessWhoConfig.js');

const getUsers = _ => {
    return db('users');
}

const getUsersByName = (username) => {
    return db("users").where({ username });
}

module.exports = {
    getUsers,
    getUsersByName
}