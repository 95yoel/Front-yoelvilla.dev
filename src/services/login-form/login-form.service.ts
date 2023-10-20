import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  loginFormValid = false;

  constructor() { }

  
  login(formLogin: any) {
    return this.checkFormStatus(formLogin);
  }

  togglePassword(inputType: string) {
    if (inputType === 'password') {
      return 'text';
    } else {
      return 'password';
    }
  }

  checkFormStatus(formLogin: any) {
    if (formLogin.email.value === '' && formLogin.password.value === '') {
      this.loginFormValid = false;
      alert('Please enter a valid email and password');
    } else if (formLogin.email.value === '') {
      this.loginFormValid = false;
      alert('Please enter a email');
    } else if (formLogin.password.value === '') {
      this.loginFormValid = false;
      alert('Please enter a password');
    }else{
      this.loginFormValid = true;
      
    }

    return this.loginFormValid;

  }



}
