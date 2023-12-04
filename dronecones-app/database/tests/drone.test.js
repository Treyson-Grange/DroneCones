import * as dronedb from '../droneDatabase'
import { db } from '../db'

beforeAll(async () => {
    return setup();
})

afterAll(async () => {
    return cleanup();
});
  
async function setup() {
    await db.drones().insert([{
       'id':10000,
       'name':'test',
       'size':0,
       'available':true,
       'owner_id':'1013e129-a340-4f54-863e-bb0644ccd3b3',
       'in_use':false,
    },
    {
        'id':10001,
        'name':'testDelete',
        'size':0,
        'available':true,
        'owner_id':'1013e129-a340-4f54-863e-bb0644ccd3b3',
        'in_use':false,
    }])
    await db.transactions().insert({
        'id':10000,
        'user_id':'1013e129-a340-4f54-863e-bb0644ccd3b3'
    })
    await db.droneDelivery().insert({
        'id':10000,
        'transaction_id':10000,
        'drone_id':10000
    })
  };
  
async function cleanup() {
    await new Promise(r => setTimeout(r, 200))
    await db.droneDelivery().delete().eq('id',10000);
    await db.transactions().delete().eq('id',10000);
    await db.drones().delete().eq('id',10000);
};




test('getDrones', () => {
    dronedb.getDrones(10, '1013e129-a340-4f54-863e-bb0644ccd3b3').then(drones => {  
        let test = drones.filter(x => x.id == 10000)[0]
        expect(drones.length).toBeGreaterThan(0);
        expect(test.name).toBe('test');
        expect(test.size).toBe(0);
        expect(test.owner_id).toBe('1013e129-a340-4f54-863e-bb0644ccd3b3')
    });
});

test('getDrone', () => {
    dronedb.getDrone(10000).then(drone => {  
        expect(drone.name).toBe('test');
        expect(drone.owner_id).toBe('1013e129-a340-4f54-863e-bb0644ccd3b3');
        expect(drone.size).toBe(0)
    });
});

// test('addDrone', () => {
//     dronedb.getDrones().then(drones => {  
//         expect(test.name).toBe('test');
//     });
// });

test('toggleDroneAvailability', async () => {
    dronedb.toggleDroneAvailability(10000)
    await new Promise(r => setTimeout(r, 200))
    await dronedb.getDrone(10000).then(drone => {  
        expect(drone.available).toBe(false);
    });
    dronedb.toggleDroneAvailability(10000)
    await new Promise(r => setTimeout(r, 200))
    await dronedb.getDrone(10000).then(drone => {  
        expect(drone.available).toBe(true);
    });
});

test('editDrone', async () => {
    await dronedb.editDrone(10000, 
        {
            'id':10000,
            'name':'test',
            'size':0,
            'available':true,
            'owner_id':'1013e129-a340-4f54-863e-bb0644ccd3b3',
            'in_use':true,
        }
    )
    await dronedb.getDrone(10000).then(drone => {  
        expect(drone.in_use).toBe(true);
    });
});

test('removeDrone', () => {
    dronedb.getDrone(10001).then(drone => {  
        expect(drone.name).toBe('testDelete');
        dronedb.removeDrone(10001).then(_ => {
            dronedb.getDrone(10001).then(drone => {
                expect(drone).toBe(null)
            })
        })
    });
});

// test('getDronesForDelivery', () => {
//     dronedb.getDrones().then(drones => {  
//         expect(test.name).toBe('test');
//     });
// });

test('getDroneDeliveries by drone', () => {
    dronedb.getDroneDeliveries('drone', 10000).then(deliveries => {  
        expect(deliveries[0].id).toBe(10000);
        expect(deliveries[0].transaction_id).toBe(10000);
    });
});

test('getDroneDeliveries by transaction', () => {
    dronedb.getDroneDeliveries('transaction', 10000).then(deliveries => {  
        expect(deliveries[0].id).toBe(10000);
        expect(deliveries[0].drone_id).toBe(10000);
    });
});