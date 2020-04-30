const enhancer = require('./enhancer.js');
// test away!

describe('enhancer functions', () => {
    describe('function repair()', () => {

        const damaged = {
            name: "pickaxe",
            durability: 5,
            enhancement: 0
        };

        const repaired = {
            name: "pickaxe",
            durability: 100,
            enhancement: 0
        };

        it('Should return an item with durability of 100. No other changes', () => {
            expect(enhancer.repair(damaged)).toStrictEqual(repaired);
        });
    })

    describe('function succeed()', () => {

        it('Should return the item with its enhancement value increased by 1. No other changes.', () => {
            
            const base = {
                name: "pickaxe",
                durability: 100,
                enhancement: 19
            };

            const enhanced = {
                name: "pickaxe",
                durability: 100,
                enhancement: 20
            };

            expect(enhancer.succeed(base)).toStrictEqual(enhanced);
        });

        it('Should return the item with no change to its enhancement value. No other changes.', () => {
            
            const base = {
                name: "pickaxe",
                durability: 100,
                enhancement: 20
            };

            const enhanced = {
                name: "pickaxe",
                durability: 100,
                enhancement: 20
            };

            expect(enhancer.succeed(base)).toStrictEqual(enhanced);
        });
    })
    
    describe('function fail()', () => {

        it('should decrease the durability of the item by 5', () => {
            const base = {
                name: "pickaxe",
                durability: 100,
                enhancement: 14
            };
    
            const failed = {
                name: "pickaxe",
                durability: 95,
                enhancement: 14
            };
            
            expect(enhancer.fail(base)).toStrictEqual(failed);
        });

        it('should decrease the durability of the item by 10', () => {
            const base = {
                name: "pickaxe",
                durability: 100,
                enhancement: 15
            };
    
            const failed = {
                name: "pickaxe",
                durability: 90,
                enhancement: 15
            };
            
            expect(enhancer.fail(base)).toStrictEqual(failed);
        });

        it('should decrease the durability of the item by 10, and the enhancement by 1', () => {
            const base = {
                name: "pickaxe",
                durability: 100,
                enhancement: 17
            };
    
            const failed = {
                name: "pickaxe",
                durability: 90,
                enhancement: 16
            };
            
            expect(enhancer.fail(base)).toStrictEqual(failed);
        });

        it('should decrease the durability of the item to 0', () => {
            const base = {
                name: "pickaxe",
                durability: 3,
                enhancement: 17
            };
    
            const failed = {
                name: "pickaxe",
                durability: 0,
                enhancement: 16
            };
            
            expect(enhancer.fail(base)).toStrictEqual(failed);
        });
    })
    
    // ----------------- stretch -----------------
    // describe('function get()', () => {

    //     it('should', () => {
            
    //     });
    // })
})