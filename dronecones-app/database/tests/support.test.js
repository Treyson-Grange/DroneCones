import * as supportdb from '../supportDatabase'
import { db } from '../db'

beforeAll(async () => {
    return setup();
});
  
afterAll(async () => {
    return cleanup();
});

async function setup() {
    await db.supportForms().insert({
        'id':10000,
        'resolved':false,
        'user_id':'1013e129-a340-4f54-863e-bb0644ccd3b3',
        'form_field':'test',
    });
};

async function cleanup() {
    await new Promise(r => setTimeout(r, 200));
    await db.supportForms().delete().eq('id',10000);
};

test('getForms', () => {
    supportdb.getForms(10010).then(forms => {
        let test = forms.filter(x => x.id == 10000)[0]
        expect(forms.length).toBeGreaterThan(0);
        expect(test.users.firstname).toBe('Matt');
        expect(test.form_field).toBe('test');
    });
});

// test('addForm', () => {
//     supportdb.addForm().then(cones => {
        
//     });
// });

test('toggleFormResolved', async() => {
    supportdb.toggleFormResolved(10000)
    await new Promise(r => setTimeout(r, 200));
    var { data } = await db.supportForms().select().eq('id',10000)
    expect(data[0].resolved).toBe(true)

    supportdb.toggleFormResolved(10000)
    await new Promise(r => setTimeout(r, 200));
    var { data } = await db.supportForms().select().eq('id',10000)
    expect(data[0].resolved).toBe(false)
});
