import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb(){
		let groceries = [
			//price in INR, unit in grams
			{ id : "1480576365112", name : "Ground Nuts", price : 30.00, unit : 250 },
			{ id : "1480576365113", name : "Toor Dal", price : 30.00, unit : 250 },
			{ id : "1480576365114", name : "Moong Dal", price : 30.00, unit : 250 },
			{ id : "1480576365115", name : "Urad Dal", price : 30.00, unit : 250 },
			{ id : "1480576365116", name : "Channa Dal", price : 30.00, unit : 250 },
			{ id : "1480576365117", name : "Sugar", price : 30.00, unit : 250 },
			{ id : "1480576365118", name : "Salt", price : 30.00, unit : 250 },
			{ id : "1480576365119", name : "Basmati Rice", price : 30.00, unit : 250 },
			{ id : "1480576365120", name : "Dosa Rice", price : 30.00, unit : 250 },
			{ id : "1480576365121", name : "Red Boiled Rice", price : 30.00, unit : 250 } 
		];
		return { groceries };
	}

}