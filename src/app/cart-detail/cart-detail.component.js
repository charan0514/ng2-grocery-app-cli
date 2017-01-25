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
var router_1 = require('@angular/router');
var grocery_service_1 = require('../service/grocery.service');
var CartDetailComponent = (function () {
    function CartDetailComponent(groceryService, router) {
        this.groceryService = groceryService;
        this.router = router;
    }
    CartDetailComponent.prototype.ngOnInit = function () {
        this.myCart = this.groceryService.getCartItems();
        this.cartItems = this.myCart['groceryList'];
        this.getGroceries();
    };
    CartDetailComponent.prototype.getGroceries = function () {
        var _this = this;
        this.groceryService.getGroceries().then(function (groceries) { return _this.groceries = groceries; });
    };
    CartDetailComponent.prototype.doPayment = function (cart) {
        this.myCart = { totalPrice: 0 };
        alert("Your payment of Rs. " + cart.totalPrice + "/- is successfull");
        this.router.navigate(['/grocery-store']);
    };
    CartDetailComponent.prototype.removeGrocery = function (item) {
        //to remove item from cart
        this.cartItems = this.cartItems.filter(function (grocery) { return grocery.id !== item.id; });
        var selectedItem = this.groceries.find(function (grocery) { return item.name === grocery.name; });
        this.myCart['grocery'] = selectedItem;
        var rsPerGram = (selectedItem.price / selectedItem.unit);
        var grocPrice = (parseInt(item.quantity)) * rsPerGram;
        this.myCart['groceryPrice'] = grocPrice;
        this.myCart['totalPrice'] -= this.groceryService.calculateTotal(item, false);
    };
    CartDetailComponent.prototype.ngOnDestroy = function () {
        this.myCart['groceryList'] = this.cartItems || [];
        this.groceryService.setCartItems(this.myCart);
    };
    CartDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cart-detail',
            templateUrl: './cart-detail.component.html',
            styleUrls: ['card-detail.component.css']
        }), 
        __metadata('design:paramtypes', [grocery_service_1.GroceryService, router_1.Router])
    ], CartDetailComponent);
    return CartDetailComponent;
}());
exports.CartDetailComponent = CartDetailComponent;
//# sourceMappingURL=cart-detail.component.js.map