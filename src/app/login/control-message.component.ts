import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login-service/login.service';

@Component({
  selector: 'control-messages',
  template: '<div *ngIf="errorMessage !== null">{{errorMessage}}</div>'
})

export class ControlMessagesComponent {

  @Input() control : FormControl;
  constructor() { }

  get () {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return LoginService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    
    return null;
  }
}