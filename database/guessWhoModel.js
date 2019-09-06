const db = require('./guessWhoConfig.js');

const getUsers = _ => {
    return db('users');
}

const getUsersByName = (username) => {
    return db("users").where({ username });
}

const insert = async user => {
    let [id] = await db("users").insert(user);
    return db("users").where({ id });
}

module.exports = {
    getUsers,
    getUsersByName,
    insert
}