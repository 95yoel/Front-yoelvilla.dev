import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

//import services 
import { ParticlesService } from 'src/services/particles/particles.service';
import { ScrollService } from 'src/services/scroll/scroll.service';
import { LoginFormService } from 'src/services/login-form/login-form.service';

//import particles.ts
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  inputType = 'password';
  id = this.particlesService.id;

  formLogin = {
    email: new FormControl(''),
    password: new FormControl(''),
  };


  constructor(public particlesService: ParticlesService
              ,public scrollService:ScrollService
              ,public loginFormService:LoginFormService,
              private http:HttpClient) { }

    particlesVisible = this.particlesService.particlesVisible;

    particlesOptions: ISourceOptions = this.particlesService.particlesOptions;


  ngOnInit(): void {
    
    this.scrollService.scrollToTop();
            
    this.scrollService.activateScrollBlock();
  }

  
  //load particles

    async particlesInit(engine: Engine): Promise<void> {
     console.log("init", engine);

     await loadFull(engine);
   }

   
   particlesLoaded(container: Container): void {
     console.log("loaded", container);
   }

   login() {
    if(this.loginFormService.login(this.formLogin)){
      
      const loginData = {
        
        email: this.formLogin.email.value,
        password: this.formLogin.password.value,
      };



      this.http.post('http://localhost:8000/login',loginData).subscribe((res:any)=>{

        // if(res.status === 'success'){
        //   alert('Login successful');
        // }else{
        //   alert('Login failed');
        // }
        console.log(res);

      }
      );



    }else{
      return;
    }
  }

  togglePassword() {
    this.inputType = this.loginFormService.togglePassword(this.inputType);
  }

  

}
