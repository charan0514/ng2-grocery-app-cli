import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { CartItem } from '../grocery/cart-item';
import { GroceryItem } from '../grocery/grocery-item';
import { GroceryService } from '../service/grocery.service';

@Component ({ 
	//moduleId : module.id,
	selector : 'grocery-list',
	templateUrl : './browse-grocery.component.html',
	styleUrls : ['./browse-grocery.component.css']
})

export class BrowseGroceryComponent implements OnInit{ 
	groceries : GroceryItem[];
	cartItems : CartItem[];
	myCart : { totalPrice : number};
	selectedItem : string;
	
	groceryList : Observable<GroceryItem[]>;
	private searchTerms = new Subject<string>();

	constructor (private groceryService : GroceryService) { }

	ngOnInit() : void {
		this.getGroceries();
		this.myCart = this.groceryService.getCartItems();
		this.cartItems = this.myCart['groceryList'];
		//grocery search logic
		this.groceryList = this.searchTerms
		.debounceTime(300)
		.distinctUntilChanged()
		.switchMap(term => term ?
			this.groceryService.search(term)
			: Observable.of<GroceryItem[]>([]))
		.catch(error=>{
			return Observable.of<GroceryItem[]>([]);
		});
	}

	getGroceries() : void {
		this.groceryService.getGroceries().then(groceries => this.groceries = groceries);
	}

	search(term : string): void {
		this.searchTerms.next(term);
		//this.grocerySerach(term);
	}

	// grocerySerach(term : string) : void {
	// 	this.groceryList = this.searchTerms
	// 	.debounceTime(500)
	// 	.distinctUntilChanged()
	// 	.switchMap(term => term ?
	// 		this.groceryService.search(term)
	// 		: Observable.of<GroceryItem[]>([]))
	// 	.catch(error=>{
	// 		return Observable.of<GroceryItem[]>([]);
	// 	});
	// }

	addGrocery(name : string, quantity: string) : void {
		if(!(name.trim() && quantity)){
			return;
		}else{
			if(!this.cartItems){
				this.cartItems = [];
				//this.myCart = {};
				//this.myCart['totalPrice'] = 0;
			}
			console.log("Selected Item is "+ name + " and Quantity is " +quantity);
			let itemId = new Date().getTime().toString(); // to generate random id
			let selectedItem = this.groceries.find(grocery => name === grocery.name);
			if(selectedItem){
				var obj = { id: <string>null, name : <string>null, quantity : <string>null, price:<number>null};
				obj['id'] = itemId;
				obj['name'] =  name; 
				obj['quantity'] = quantity;
				this.myCart['grocery'] = selectedItem;
				let rsPerGram = (selectedItem.price/selectedItem.unit);
				let grocPrice = (parseInt(quantity))*rsPerGram;
				obj['price'] = grocPrice;
				this.myCart['groceryPrice'] = grocPrice;
				this.cartItems.push(obj);

				if(!this.myCart['totalPrice'])
					this.myCart['totalPrice'] = 0;
				
				this.myCart['totalPrice'] += this.groceryService.calculateTotal(obj);

				this.searchTerms.next(null);
			}else{
				alert("Oops!!! selected item is not present");
			}
		}
	}

	selectGrocery(item : CartItem) : void {
		this.selectedItem = item.name;
		this.searchTerms.next(null);
	}

	// removeGrocery(item : CartItem) : void {
	// 	//to remove item from cart
	// 	this.cartItems = this.cartItems.filter(grocery => { return grocery.id !== item.id});
		
	// 	let selectedItem = this.groceries.find(grocery => item.name === grocery.name);
	// 	this.myCart['grocery'] = selectedItem;
	// 	let rsPerGram = (selectedItem.price/selectedItem.unit);
	// 	let grocPrice = (parseInt(item.quantity))*rsPerGram;
	// 	this.myCart['groceryPrice'] = grocPrice;
	// 	this.updateTotal(item, false);
	// }

	// updateTotal(item : CartItem, isAdded : boolean) : void {
	// 	//let selectedItem = this.groceries.find(grocery => item.name === grocery.name);
	// 	let selectedItem = this.myCart['grocery'];
	// 	// let rsPerGram = (selectedItem.price/selectedItem.unit);
	// 	// let quantity = item['quantity'];
	// 	let updatedQuantity = this.myCart['groceryPrice'];
	// 	if(isAdded)
	// 		this.myCart['totalPrice'] += updatedQuantity;
	// 	else
	// 		this.myCart['totalPrice'] -= updatedQuantity;
	// }

	doPayment(cart : any) : void {
		this.myCart = {totalPrice: 0};
		this.selectedItem = null;
		alert("Your payment of Rs. "+cart.totalPrice+ "/- is successfull");
	}

	ngOnDestroy() : void {
		if(!this.myCart)
			this.myCart = {totalPrice: 0};
		this.myCart['groceryList'] = this.cartItems || [];
		this.groceryService.setCartItems(this.myCart);
	}

	// routeWithData() :void{
	// 	this.groceryService.setCartItems(this.myCart);
	// }
}