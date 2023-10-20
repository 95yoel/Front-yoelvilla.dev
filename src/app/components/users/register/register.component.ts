import { Component, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

//import services
import { ParticlesService } from 'src/services/particles/particles.service';
import { ScrollService } from 'src/services/scroll/scroll.service';

//import particles.ts
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formValid = false;
  nameValid = false;
  surnameValid = false;
  emailValid = false;
  passwordValid = false;
  passwordCompatible = false;

  formRegister = {
    name: new FormControl(''),
    surname: new FormControl({value: '', disabled: true}),
    email: new FormControl({value: '', disabled: true}),
    password: new FormControl({ value: '', disabled: true }, [
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d)/),
    ]),
    
  }
  
  password2 = new FormControl({ value: '', disabled: true }, [
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[A-Z])(?=.*\d)/),
  ]);
  
  

  constructor(public scrollService:ScrollService,public particlesService: ParticlesService,private http:HttpClient) { }

    particlesVisible = this.particlesService.particlesVisible;

    particlesOptions: ISourceOptions = this.particlesService.particlesOptions;

    id = this.particlesService.id;

  ngOnInit(): void {
      
      this.scrollService.scrollToTop();
              
      this.scrollService.controleScroll(650);

  }


  evalName(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
  
    if (inputValue.length >= 3) {
      this.formRegister.surname.enable();
      this.nameValid = true;
    } else {
      this.formRegister.surname.disable();
      this.nameValid = false;
    }
  }
  
  evalSurname(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
  
    if (inputValue.length >= 3) {
      this.formRegister.email.enable();
      this.surnameValid = true;
    } else {
      this.formRegister.email.disable();
      this.surnameValid = false;
    }
  }
  
  evalEmail(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
  
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(inputValue)) {
      this.formRegister.password.enable();
      this.emailValid = true;
    } else {
      this.formRegister.password.disable();
      this.emailValid = false;
    }
  }

  evalPassword(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
  
      // Regular expression for password validation
    if (inputValue.length >= 8 && /[A-Z]/.test(inputValue) && /\d/.test(inputValue)) {
      this.password2.enable();
      this.passwordValid = true;
    } else {
      this.password2.disable();
      this.passwordValid = false;
    }
  }
  
  evalPassword2(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
  
    if (inputValue.length >= 8 && /[A-Z]/.test(inputValue) && /\d/.test(inputValue)) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }
  
  
  submitForm() {

    const passwordValue = this.formRegister.password.value;
    const password2Value = this.password2.value;
  
    // Verify that the passwords are the same and that the password is valid
    const isPasswordValid = (
      passwordValue === password2Value && this.formRegister.password.valid 
    );
  
    // Enable the button if the passwords are the same and the password is valid
    this.passwordCompatible = isPasswordValid;


    //if the passwords are not the same, the password fields are cleared
    if(!this.passwordCompatible){
      this.formRegister.password.setValue('');
      this.password2.setValue('');
    }else{
      
      //logic to send the data to the backend

      const userData = {
        name: this.formRegister.name.value,
        surname: this.formRegister.surname.value,
        email: this.formRegister.email.value,
        password: this.formRegister.password.value,
      };

      this.http.post('http://localhost:8000/create_user',userData).subscribe((data:any)=>{
        console.log(data);
      }
      );

    }

    
  
  }
  




  //load particles

  async particlesInit(engine: Engine): Promise<void> {
     console.log("init", engine);

     await loadFull(engine);
   }


   particlesLoaded(container: Container): void {
     console.log("loaded", container);
   }


   //call the funciton to control the scroll when the window is resized

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.scrollService.controleScroll(650);
  }



  
}


