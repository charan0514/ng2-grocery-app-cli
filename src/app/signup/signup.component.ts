import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../login-service/login.service';
import { matchingPasswords } from '../login-service/login.service';

@Component ({
	//moduleId : module.id,
	selector : 'sign-up',
	templateUrl : './signup.component.html'
})

export class SignupComponent {
	signupForm : FormGroup;

	constructor (formBuilder : FormBuilder, private router : Router){
		this.signupForm = formBuilder.group({
			'firstName' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
			'lastName' : [null, Validators.maxLength(5)],
			'email' : [null, Validators.compose([Validators.required, LoginService.emailValidator])],
			'password' : [null, Validators.required],
			'confirmPassword' : [null, Validators.required]
		}, { validator : matchingPasswords('password', 'confirmPassword')})
	}

	doSignup(value : any) : void {
		console.log("User details : First Name "+ value.firstName + " Email " + value.email);
		this.router.navigate(['login']);
	}
}
