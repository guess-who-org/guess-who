const db = require('./guessWhoConfig.js');

const getUsers = _ => {
    return db('users');
}

const getUserByName = (name) => {
    return db("users").where({ name: name });
}

const getCelebs = _ => {
    return db('celebs');
}

const getCelebById = (id) => {
    return db("celebs").where({ id: id });
}

const addCeleb = (name) => {
    return db('celebs').insert({ name: name })
}

const updateCeleb = (id, name) => {
    return db('celebs').where({ id: id }).update({name: name });
}

const deleteCeleb = (id) => {
    return db('celebs').where({ id: id }).del();
}

module.exports = {
    getUsers,
    getUsersByName
}