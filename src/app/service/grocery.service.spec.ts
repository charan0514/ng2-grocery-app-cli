import { TestBed, inject,async } from '@angular/core/testing';
import { GroceryService } from './grocery.service';

// TestBed.configureTestingModule({
//     providers: [ GroceryService ]
// });

describe("Testing Cart Services", () => {
    let gService : GroceryService = null;

    // beforeAll(inject([GroceryService], (groceryService) => {
    //     gService = groceryService;
    // }));

	it("should give updated total", () => {
        async(inject([GroceryService], (groceryService) => {
            let obj = {'id' : "1233", 'name' :  "Dal", 'quantity' : 500 };
            expect(groceryService.calculateTotal(obj)).toEqual(0);

        })); 
    });

    it("should give initial grocery items", () => {
       async(inject([GroceryService], (groceryService) => {
           groceryService.getGroceries().then((groceryList) => {
              expect(groceryList.length).toBe(1);
           })
       }))
    })
})

