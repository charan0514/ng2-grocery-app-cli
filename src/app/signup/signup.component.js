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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var login_service_1 = require('../login-service/login.service');
var login_service_2 = require('../login-service/login.service');
var SignupComponent = (function () {
    function SignupComponent(formBuilder, router) {
        this.router = router;
        this.signupForm = formBuilder.group({
            'firstName': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)])],
            'lastName': [null, forms_1.Validators.maxLength(5)],
            'email': [null, forms_1.Validators.compose([forms_1.Validators.required, login_service_1.LoginService.emailValidator])],
            'password': [null, forms_1.Validators.required],
            'confirmPassword': [null, forms_1.Validators.required]
        }, { validator: login_service_2.matchingPasswords('password', 'confirmPassword') });
    }
    SignupComponent.prototype.doSignup = function (value) {
        console.log("User details : First Name " + value.firstName + " Email " + value.email);
        this.router.navigate(['login']);
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sign-up',
            templateUrl: './signup.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map