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
require('./rxjs/rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
//Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data-service/in-memory-data.service');
var app_routing_module_1 = require('./routing-module/app-routing.module');
var grocery_service_1 = require('./service/grocery.service');
var login_service_1 = require('./login-service/login.service');
var app_component_1 = require('./app.component');
var browse_grocery_component_1 = require('./grocery-store/browse-grocery.component');
var cart_detail_component_1 = require('./cart-detail/cart-detail.component');
var login_component_1 = require('./login/login.component');
var signup_component_1 = require('./signup/signup.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService)],
            declarations: [app_component_1.AppComponent, browse_grocery_component_1.BrowseGroceryComponent, cart_detail_component_1.CartDetailComponent, login_component_1.LoginComponent, signup_component_1.SignupComponent],
            providers: [grocery_service_1.GroceryService, login_service_1.LoginService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map