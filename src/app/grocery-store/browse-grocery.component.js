"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var grocery_service_1 = require('../service/grocery.service');
var BrowseGroceryComponent = (function () {
    function BrowseGroceryComponent(groceryService) {
        this.groceryService = groceryService;
        this.searchTerms = new Subject_1.Subject();
    }
    BrowseGroceryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getGroceries();
        this.myCart = this.groceryService.getCartItems();
        this.cartItems = this.myCart['groceryList'];
        //grocery search logic
        this.groceryList = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ?
            _this.groceryService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            return Observable_1.Observable.of([]);
        });
    };
    BrowseGroceryComponent.prototype.getGroceries = function () {
        var _this = this;
        this.groceryService.getGroceries().then(function (groceries) { return _this.groceries = groceries; });
    };
    BrowseGroceryComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
        //this.grocerySerach(term);
    };
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
    BrowseGroceryComponent.prototype.addGrocery = function (name, quantity) {
        if (!(name.trim() && quantity)) {
            return;
        }
        else {
            if (!this.cartItems) {
                this.cartItems = [];
            }
            console.log("Selected Item is " + name + " and Quantity is " + quantity);
            var itemId = new Date().getTime().toString(); // to generate random id
            var selectedItem = this.groceries.find(function (grocery) { return name === grocery.name; });
            if (selectedItem) {
                var obj = { id: null, name: null, quantity: null, price: null };
                obj['id'] = itemId;
                obj['name'] = name;
                obj['quantity'] = quantity;
                this.myCart['grocery'] = selectedItem;
                var rsPerGram = (selectedItem.price / selectedItem.unit);
                var grocPrice = (parseInt(quantity)) * rsPerGram;
                obj['price'] = grocPrice;
                this.myCart['groceryPrice'] = grocPrice;
                this.cartItems.push(obj);
                if (!this.myCart['totalPrice'])
                    this.myCart['totalPrice'] = 0;
                this.myCart['totalPrice'] += this.groceryService.calculateTotal(obj, true);
                this.searchTerms.next(null);
            }
            else {
                alert("Oops!!! selected item is not present");
            }
        }
    };
    BrowseGroceryComponent.prototype.selectGrocery = function (item) {
        this.selectedItem = item.name;
        this.searchTerms.next(null);
    };
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
    BrowseGroceryComponent.prototype.doPayment = function (cart) {
        this.myCart = { totalPrice: 0 };
        this.selectedItem = null;
        alert("Your payment of Rs. " + cart.totalPrice + "/- is successfull");
    };
    BrowseGroceryComponent.prototype.ngOnDestroy = function () {
        if (!this.myCart)
            this.myCart = { totalPrice: 0 };
        this.myCart['groceryList'] = this.cartItems || [];
        this.groceryService.setCartItems(this.myCart);
    };
    BrowseGroceryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'grocery-list',
            templateUrl: './browse-grocery.component.html',
            styleUrls: ['./browse-grocery.component.css']
        }), 
        __metadata('design:paramtypes', [grocery_service_1.GroceryService])
    ], BrowseGroceryComponent);
    return BrowseGroceryComponent;
}());
exports.BrowseGroceryComponent = BrowseGroceryComponent;
//# sourceMappingURL=browse-grocery.component.js.map