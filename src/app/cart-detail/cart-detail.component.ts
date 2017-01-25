import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GroceryService } from '../service/grocery.service';

import { CartItem } from '../grocery/cart-item';
import { GroceryItem } from '../grocery/grocery-item';

@Component ({ 
	//moduleId : module.id,
	selector: 'cart-detail',
	templateUrl: './cart-detail.component.html',
	styleUrls : ['card-detail.component.css']
})

export class CartDetailComponent implements OnInit{

	myCart : {};
	cartItems : CartItem[];
	groceries : GroceryItem[];

	constructor (
		private groceryService : GroceryService,
		private router : Router
		){ }

	ngOnInit() : void{
		this.myCart = this.groceryService.getCartItems();
		this.cartItems = this.myCart['groceryList'];
		this.getGroceries();
	} 

	getGroceries() : void {
		this.groceryService.getGroceries().then(groceries => this.groceries = groceries);
	}

	doPayment(cart : any) : void {
		this.myCart = {totalPrice: 0};
		alert("Your payment of Rs. "+cart.totalPrice+ "/- is successfull");
		this.router.navigate(['/grocery-store']);
	}

	removeGrocery(item : CartItem) : void {
		//to remove item from cart
		this.cartItems = this.cartItems.filter(grocery => { return grocery.id !== item.id});
		
		let selectedItem = this.groceries.find(grocery => item.name === grocery.name);
		this.myCart['grocery'] = selectedItem;
		let rsPerGram = (selectedItem.price/selectedItem.unit);
		let grocPrice = (parseInt(item.quantity))*rsPerGram;
		this.myCart['groceryPrice'] = grocPrice;
		this.myCart['totalPrice'] -= this.groceryService.calculateTotal(item);
	}

	ngOnDestroy() : void {
		this.myCart['groceryList'] = this.cartItems || [];
		this.groceryService.setCartItems(this.myCart);
	}
	
}