import * as stockdb from '../stockDatabase'
import { db } from '../db'
// import { supabase } from '../../components/lib/supabaseClient'


beforeAll(async () => {
  return setup();
});

afterAll(async () => {
  return cleanup();
});

async function setup() {
  await db.cones().insert([{
    'id':10000,
    'name': 'testCone',
    'amount':100,
    'available': false,
    'price':100,
    'image':null
  },{
    'id':10001,
    'name': 'testDelete',
    'amount':100,
    'available': false,
    'price':100,
    'image':null
  },{
    'id':10002,
    'name': 'testAddOne',
    'amount':100,
    'available': false,
    'price':100,
    'image':null
  }]);
};

async function cleanup() {
  await db.cones().delete().eq('id',10002);
  await db.cones().delete().eq('id',10000);
};


test('getCones', () => {
  stockdb.getCones().then(cones => {
    let test = cones.filter(x => x.id == 10000)[0]
    expect(cones.length).toBeGreaterThan(0);
    expect(test.name).toBe('testCone');
    expect(test.available).toBe(false);
  });
});

test('getCone', () => {
  stockdb.getCone(10000).then( cone => {
    expect(cone.name).toBe('testCone')
    expect(cone.available).toBe(false)
  });
});

test('addConeAmount', async () => {
  stockdb.addConeAmount(10000, 100)
  await new Promise(r => setTimeout(r, 200));
  await stockdb.getCone(10000).then(cone => {
    expect(cone.amount).toBe(200)
  });

  stockdb.addConeAmount(10000, -100)
  await new Promise(r => setTimeout(r, 200));
  await stockdb.getCone(10000).then(cone => {
    expect(cone.amount).toBe(100)
  });

  stockdb.addConeAmount(10000, 0)
  await new Promise(r => setTimeout(r, 200));
  await stockdb.getCone(10000).then(cone => {
    expect(cone.amount).toBe(100)
  });
});



test('useOneCone', async () => {
  await stockdb.useOneCone(10002)
  await new Promise(r => setTimeout(r, 500));

  stockdb.getCone(10002).then( cone => {
    expect(cone.amount).toBe(99)
  });
});


test('updateCone', async () => {
  await stockdb.updateCone(10000, {'id':10000,
    'name': 'testCone',
    'amount':100,
    'available': false,
    'price':100,
    'image':'http://test.com'})
  await stockdb.getCone(10000).then(cone => {
    expect(cone.image).toBe('http://test.com')
  });
});

test('removeCone correctly deletes the test cone', () => {
  stockdb.getCone(10001).then(cone => {
    expect(cone.name).toBe('testDelete')
    stockdb.removeCone(10001).then(_ => {
      stockdb.getCone(10001).then(cone => {
        expect(cone).toBe(null)
      });
    });
  });
});

test('toggleConeAvailability', async () => {
  stockdb.toggleConeAvailability(10000)
  await new Promise(r => setTimeout(r, 200));
  await stockdb.getCone(10000).then(cone => {
    expect(cone.available).toBe(true)
  });

  stockdb.toggleConeAvailability(10000)
  await new Promise(r => setTimeout(r, 200));
  stockdb.getCone(10000).then(cone => {
    expect(cone.available).toBe(false)
  });
});
