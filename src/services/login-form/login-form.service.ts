import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor() { }

  
  login(formLogin: any) {
    this.checkFormStatus(formLogin);
  }

  togglePassword(inputType: string) {
    if (inputType === 'password') {
      return 'text';
    } else {
      return 'password';
    }
  }

  checkFormStatus(formLogin: any) {
    if (formLogin.username.value === '' && formLogin.password.value === '') {
      alert('Please enter a username and password');
    } else if (formLogin.username.value === '') {
      alert('Please enter a username');
    } else if (formLogin.password.value === '') {
      alert('Please enter a password');
    }
  }



}
