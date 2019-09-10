const dbModel = require('../database/guessWhoModel');

describe('guessWhoModel.js', () => {

    const userName = "TestName" + Math.floor((Math.random() * 100) + 1);
    const passWord = "BestPass" + Math.floor((Math.random() * 100) + 1);
    let workingId = null;

    // call insertUser and expect the inserted object in return
    describe('insertUser into dbModel database', () => {
        it('should return an object', async () => {
            const addedUser = await dbModel.insertUser({username: userName, password: passWord})
            workingId = addedUser.id;
            expect(typeof addedUser).toBe('object')
        });
    });
    // call deleteUser and expect the deleted id in return
    describe('deleteUser from dbModel database', () => {
        it('should return 1', async () => {
            const deletedUser = await dbModel.deleteUser(workingId)
            // 1 means user was deleted
            expect(deletedUser).toBe(1)
        });
    });
});