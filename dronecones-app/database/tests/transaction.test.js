import * as transdb from '../transactionDatabase'
import { db } from '../db'

beforeAll(async () => {
    return setup();
})

afterAll(async () => {
    return cleanup();
});
  
async function setup() {
    await db.transactions().insert({
       'id':10001,
       'tax':100,
       'completed':true,
       'user_id':'1013e129-a340-4f54-863e-bb0644ccd3b3',
       'sales_price':400,
       'final_price':500,
       'item_count':2
    })
};
  
async function cleanup() {
    await new Promise(r => setTimeout(r, 200))
    await db.transactions().delete().eq('id',10001);
};


test('getTransactions', () => {
    transdb.getTransactions().then(transactions => {  
        let test = transactions.filter(x => x.id == 10001)[0]
        expect(transactions.length).toBeGreaterThan(0);
        expect(test.tax).toBe(100);
        expect(test.item_count).toBe(2);
        expect(test.user_id).toBe('1013e129-a340-4f54-863e-bb0644ccd3b3')
    });
});