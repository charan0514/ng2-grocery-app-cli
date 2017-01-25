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
var LoginComponent = (function () {
    function LoginComponent(formBuilder, router) {
        this.router = router;
        //   userLoginForm : any;
        //   constructor (private formBuilder : FormBuilder, private router : Router) { 
        //   this.userLoginForm = this.formBuilder.group({ 
        //     'name' : ['', Validators.required ],
        //     'email' : ['', Validators.required, LoginService.emailValidator ],
        //     'password' : ['', Validators.required, LoginService.passwordValidator]
        //   });
        // }
        // saveUser() {
        //   if (this.userLoginForm.dirty && this.userLoginForm.valid) {
        //     //alert(`Name: ${this.userLoginForm.value.name} Email: ${this.userLoginForm.value.email}`);
        //     this.router.navigate(['grocery-store']);
        //   }
        // }
        //model = new User("charan@mailinator.com", "1234qwerty5");
        this.submitted = false;
        this.loginForm = formBuilder.group({
            "email": ['charan@mailinator.com', forms_1.Validators.required],
            //"password" : ['12345qwerty', Validators.required]
            "password": ['12345qwerty', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8)])]
        });
    }
    LoginComponent.prototype.doLogin = function () {
        this.submitted = true;
        this.router.navigate(['grocery-store']);
    };
    LoginComponent.prototype.reset = function () {
        //this.model = new User("", "");
        //this.loginForm.patchValue({'email': '', password: ''})
        this.loginForm.reset();
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-login',
            //template : '<div>Hi</div>'
            templateUrl: './login.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map