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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var GroceryService = (function () {
    function GroceryService(http) {
        this.http = http;
        this.headres = new http_1.Headers({ 'Content-Type': 'application.json' });
        this.apiUrl = '/app/groceries';
        this.myCart = {};
        this.groceries = [];
    }
    GroceryService.prototype.getGroceries = function () {
        var _this = this;
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (resp) {
            //resp.json().data as GroceryItem[])
            _this.groceries = resp.json().data;
            return resp.json().data;
        })
            .catch(this.handleError);
    };
    GroceryService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    GroceryService.prototype.search = function (term) {
        return this.http
            .get(this.apiUrl + ("/?name=" + term))
            .map(function (result) { return result.json().data; });
    };
    GroceryService.prototype.setCartItems = function (cart) {
        this.myCart = cart;
    };
    GroceryService.prototype.getCartItems = function () {
        return this.myCart;
    };
    GroceryService.prototype.calculateTotal = function (item, isAdded) {
        var selectedItem = this.groceries.find(function (grocery) { return item.name === grocery.name; });
        var rsPerGram = (selectedItem.price / selectedItem.unit);
        var quantity = item['quantity'];
        var updatedQuantity = (parseInt(quantity)) * rsPerGram;
        // if(isAdded)
        // 	this.myCart['totalPrice'] += updatedQuantity;
        // else
        // 	this.myCart['totalPrice'] -= updatedQuantity;
        return updatedQuantity;
    };
    GroceryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GroceryService);
    return GroceryService;
}());
exports.GroceryService = GroceryService;
//# sourceMappingURL=grocery.service.js.map