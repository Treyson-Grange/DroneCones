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
  await db.icecreamFlavors().insert([{
    'id':10000,
    'name': 'test',
    'amount':100,
    'available': false,
    'price_per_scoop':100,
    'image':null
  },{
    'id': 10001,
    'name': 'testDelete',
    'amount':100,
    'available': false,
    'price_per_scoop':100,
    'image':null
  },{
    'id':10002,
    'name': 'testAddOne',
    'amount':100,
    'available': false,
    'price_per_scoop':100,
    'image':null
  }]);
};

async function cleanup() {
  await db.icecreamFlavors().delete().eq('id',10002);
  await db.icecreamFlavors().delete().eq('id',10000);
};


test('getIcecreamFlavors', () => {
  stockdb.getIcecreamFlavors().then(flavors => {
    let test = flavors.filter(x => x.id == 10000)[0]
    expect(flavors.length).toBeGreaterThan(0);
    expect(test.name).toBe('test');
    expect(test.available).toBe(false);
  });
});

// test('getIcecreamFlavors', () => {
//   stockdb.getIcecreamFlavor(10000).then( flavor => {
//     expect(flavor.name).toBe('test')
//     expect(flavor.available).toBe(false)
//   });
// });

// test('addIcecreamFlavorAmount', async () => {
//   stockdb.addIcecreamFlavorAmount(10000, 100)
//   await new Promise(r => setTimeout(r, 200));
//   await stockdb.getIcecreamFlavor(10000).then(flavor => {
//     expect(flavor.amount).toBe(200)
//   });

//   stockdb.addIcecreamFlavorAmount(10000, -100)
//   await new Promise(r => setTimeout(r, 200));
//   await stockdb.getIcecreamFlavor(10000).then(flavor => {
//     expect(flavor.amount).toBe(100)
//   });

//   stockdb.addIcecreamFlavorAmount(10000, 0)
//   await new Promise(r => setTimeout(r, 200));
//   await stockdb.getIcecreamFlavor(10000).then(flavor => {
//     expect(flavor.amount).toBe(100)
//   });
// });



// test('useOneIcecreamFlavor', async () => {
//   await stockdb.useOneIcecreamFlavor(10002)
//   await new Promise(r => setTimeout(r, 500));

//   stockdb.getIcecreamFlavor(10002).then( flavor => {
//     expect(flavor.amount).toBe(99)
//   });
// });


// test('updateIcecreamFlavor', async () => {
//   await stockdb.updateIcecreamFlavor(10000, {'id':10000,
//   'name': 'test',
//   'amount':100,
//   'available': false,
//   'price_per_scoop':100,
//   'image':'http://test.com'})
//   await stockdb.getIcecreamFlavor(10000).then(flavor => {
//     expect(flavor.image).toBe('http://test.com')
//   });
// });

test('removeIcecreamFlavor', () => {
  stockdb.getIcecreamFlavor(10001).then(flavor => {
    expect(flavor.name).toBe('testDelete')
    stockdb.removeIcecreamFlavor(10001).then(_ => {
      stockdb.getIcecreamFlavor(10001).then(flavor => {
        expect(flavor).toBe(null)
      });
    });
  });
});

// test('toggleIcecreamFlavorAvailability', async () => {
//   stockdb.toggleIcecreamFlavorAvailability(10000)
//   await new Promise(r => setTimeout(r, 200));
//   await stockdb.getIcecreamFlavor(10000).then(flavor => {
//     expect(flavor.available).toBe(true)
//   });

//   stockdb.toggleIcecreamFlavorAvailability(10000)
//   await new Promise(r => setTimeout(r, 200));
//   stockdb.getIcecreamFlavor(10000).then(flavor => {
//     expect(flavor.available).toBe(false)
//   });
// });
