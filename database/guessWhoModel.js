const db = require('./guessWhoConfig.js');

// Users table

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

// Celebs table

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

// Tweets table

const getTweets = _ => {
     return db('tweets');
}
    
const getTweetById = (id) => {
    return db("tweets").where({ id: id });
}

const addTweet = (contents) => {
    return db('tweets').insert(contents)
}

const updateTweet = (id, contents) => {
    return db('tweets').where({ id: id }).update(contents);
}

const deleteTweet = (id) => {
    return db('tweets').where({ id: id }).del();
}

// Games table

const getGames = _ => {
    return db('games');
}

const getGameById = (id) => {
    return db("games").where({ id: id });
}

const addGame = (contents) => {
    return db('games').insert(contents)
}

const updateGame = (id, contents) => {
    return db('games').where({ id: id }).update(contents);
}

const deleteGame = (id) => {
    return db('games').where({ id: id }).del();
}

// Games_celebs table

const getGamesCelebs = _ => {
    return db('games_celebs');
}

const getGamesCelebsById = (id) => {
    return db("games_celebs").where({ id: id });
}

const addGameCeleb = (contents) => {
    return db('games_celebs').insert(contents)
}

const deleteGameCeleb = (id) => {
    return db('games_celebs').where({ id: id }).del();
}

// Games_celebs table

const getGamesUsers = _ => {
    return db('games_celebs');
}

const getGamesUsersById = (id) => {
    return db("games_celebs").where({ id: id });
}

const addGameUser = (contents) => {
    return db('games_celebs').insert(contents)
}

const deleteGameUser = (id) => {
    return db('games_celebs').where({ id: id }).del();
}

module.exports = {
    getUsers,
    getUsersByName,
    insertUser,
    getCelebs,
    getCelebById,
    addCeleb,
    updateCeleb,
    deleteCeleb,
    getTweets,
    getTweetById,
    addTweet,
    updateTweet,
    deleteTweet,
    getGames,
    getGameById,
    addGame,
    updateGame,
    deleteGame,
    getGamesCelebs,
    getGamesCelebsById,
    addGameCeleb,
    deleteGameCeleb,
    getGamesUsers,
    getGamesUsersById,
    addGameUser,
    deleteGameUser
}