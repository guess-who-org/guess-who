const db = require('./guessWhoConfig.js');

const getUsers = _ => {
    return db('users');
}

const getUsersByName = username => {
    return db("users").where({ username }).first();
}

const insertUser = async user => {
    let [id] = await db("users").insert(user);
    return db("users").where({ id }).first();
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
    getUsersByName,
    insertUser,
    getCelebs,
}