import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

import { GroceryItem } from '../grocery/grocery-item';
import { CartItem } from '../grocery/cart-item';

@Injectable()
export class GroceryService { 
	private headres = new Headers({'Content-Type':'application.json'});
	private apiUrl = '/app/groceries';
	private myCart = {};
	private groceries = <GroceryItem[]>[];

	constructor (
		private http : Http,
		) {}

	getGroceries() : Promise<GroceryItem[]> {
		return this.http.get(this.apiUrl)
		.toPromise()
		.then(resp => {
			//resp.json().data as GroceryItem[])
			this.groceries = resp.json().data;
			return resp.json().data;
		})
		.catch(this.handleError);
	}

	private handleError(error : any) : Promise<any> {
		return Promise.reject(error.message || error);
	}

	search(term : string) : Observable<GroceryItem[]> {
		return this.http
		.get(this.apiUrl+`/?name=${term}`)
		.map((result : Response) => result.json().data as GroceryItem[]);
	}

	setCartItems(cart : any) : void{
		this.myCart = cart;
	}

	getCartItems() : any{
		return this.myCart;
	}

	calculateTotal(item : CartItem) : number {
		let selectedItem = this.groceries.find(grocery => item.name === grocery.name);
		let rsPerGram = (selectedItem.price/selectedItem.unit);
		let quantity = item['quantity'];
		let updatedQuantity = (parseInt(quantity))*rsPerGram;
		// if(isAdded)
		// 	this.myCart['totalPrice'] += updatedQuantity;
		// else
		// 	this.myCart['totalPrice'] -= updatedQuantity;
		return updatedQuantity;
	}
}