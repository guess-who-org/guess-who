const request = require('supertest');
const server = require('../server.js'); 

describe('auth-router.js', () => {
    const userName = "John1" + Math.floor((Math.random() * 100) + 1);
    // POST to /register
    describe('POST command on /register', () => {
        it('should return a 201 status', async () => {
            const response = await request(server).post('/api/auth/register').send({username: userName, password: "moon"})
            expect(response.status).toEqual(201);
        });
    });
    // POST to /login
    describe('POST command on /login', () => {
        it('should return a 200 status', async () => {
            const response = await request(server).post('/api/auth/login').send({username: userName, password: "moon"})
            expect(response.status).toEqual(200);
        });
    });
});