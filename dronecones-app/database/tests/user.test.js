import * as userdb from '../userDatabase'
import { db } from '../db'
// import { supabase } from '../../components/lib/supabaseClient'


beforeAll(async () => {
    return setup();
});

afterAll(async () => {
    return cleanup();
});

async function setup() {
    await db.users().insert({
        'id':'44efb0fc-4a0f-4fcf-9f00-9b14c792126f',
        'username':'testUser',
        'email':'test@gmail.com',
        'banned':false,
        'usertype':1,
        'firstname':'test',
        'lastname':'user'
    });
};

async function cleanup() {
    await db.users().delete().eq('id','44efb0fc-4a0f-4fcf-9f00-9b14c792126f');
};


test('getUser', () => {
    userdb.getUser('44efb0fc-4a0f-4fcf-9f00-9b14c792126f').then(user => {
        expect(user.username).toBe('testUser');
        expect(user.firstname).toBe('test');
        expect(user.usertype).toBe(1);
    });
});

test('getUsers', () => {
    userdb.getUsers().then(users => {
        let test = users.filter(x => x.id == '44efb0fc-4a0f-4fcf-9f00-9b14c792126f')[0]
        expect(users.length).toBeGreaterThan(0)
        expect(test.username).toBe('testUser');
        expect(test.firstname).toBe('test');
        expect(test.usertype).toBe(1);    
    });
});

test('toggleUserBan', async () => {
    userdb.toggleUserBan('44efb0fc-4a0f-4fcf-9f00-9b14c792126f')
    await new Promise(r => setTimeout(r, 300))
    await userdb.getUser('44efb0fc-4a0f-4fcf-9f00-9b14c792126f').then(user => {
        // expect(user.banned).toBe(true);
    });

    userdb.toggleUserBan('44efb0fc-4a0f-4fcf-9f00-9b14c792126f')
    await new Promise(r => setTimeout(r, 300))
    await userdb.getUser('44efb0fc-4a0f-4fcf-9f00-9b14c792126f').then(user => {
        expect(user.banned).toBe(false);
    });
});  

test('updateUser', async () => {
    await userdb.updateUser('44efb0fc-4a0f-4fcf-9f00-9b14c792126f', 
    {
        'id':'44efb0fc-4a0f-4fcf-9f00-9b14c792126f',
        'username':'testUser',
        'email':'test@yahoo.com',
        'usertype':1,
        'firstname':'test',
        'lastname':'user'
    })
    await userdb.getUser('44efb0fc-4a0f-4fcf-9f00-9b14c792126f').then(user => {
        expect(user.email).toBe('test@yahoo.com');
    });
});