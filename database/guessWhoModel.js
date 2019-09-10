const db = require('./guessWhoConfig.js');

// Users table

const getUsers = _ => {
    return db('users');
}

const getUserById = (id) => {
    return db("users").where({ id: id }).first();
}

const insertUser = async user => {
    let [id] = await db("users").insert(user);
    return db("users").where({ id }).first();
}

const deleteUser = (id) => {
    return db('users').where({ id: id }).del();
}

// Celebs table

const getCelebs = _ => {
    return db('celebs');
}

const getCelebById = (id) => {
    return db("celebs").where({ id: id });
}

const insertCeleb = (name) => {
    return db('celebs').insert(name)
}

const updateCeleb = (id, name) => {
    return db('celebs').where({ id: id }).update(name);
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

const insertTweet = (contents) => {
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

const insertGame = (contents) => {
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

const insertGameCeleb = (contents) => {
    return db('games_celebs').insert(contents)
}

const deleteGameCeleb = (id) => {
    return db('games_celebs').where({ id: id }).del();
}

// Games_celebs table

const getGamesUsers = _ => {
    return db('games_users');
}

const getGamesUsersById = (id) => {
    return db("games_users").where({ id: id });
}

const insertGameUser = (contents) => {
    return db('games_users').insert(contents)
}

const deleteGameUser = (id) => {
    return db('games_users').where({ id: id }).del();
}

module.exports = {
    // User table
    getUsers,
    getUserById,
    insertUser,
    deleteUser,
    // Celebs table
    getCelebs,
    getCelebById,
    insertCeleb,
    updateCeleb,
    deleteCeleb,
    // Tweets table
    getTweets,
    getTweetById,
    insertTweet,
    updateTweet,
    deleteTweet,
    // Game table
    getGames,
    getGameById,
    insertGame,
    updateGame,
    deleteGame,
    // games_celebs table
    getGamesCelebs,
    getGamesCelebsById,
    insertGameCeleb,
    deleteGameCeleb,
    // games_users table
    getGamesUsers,
    getGamesUsersById,
    insertGameUser,
    deleteGameUser
}