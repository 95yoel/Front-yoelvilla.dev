import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

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
    username: new FormControl(''),
    password: new FormControl(''),
  };


  constructor(public particlesService: ParticlesService
              ,public scrollService:ScrollService
              ,public loginFormService:LoginFormService) { }


  ngOnInit(): void {
    
    this.scrollService.scrollToTop();
            
    this.scrollService.activateScrollBlock();
  }

  
    particlesVisible = this.particlesService.particlesVisible;

    particlesOptions: ISourceOptions = this.particlesService.particlesOptions;

    async particlesInit(engine: Engine): Promise<void> {
     console.log("init", engine);

     await loadFull(engine);
   }

   //si falla aqui habia un public antes de particlesLoaded pero no creo que sea necesario
   particlesLoaded(container: Container): void {
     console.log("loaded", container);
   }

   login() {
    this.loginFormService.login(this.formLogin);
  }

  togglePassword() {
    this.inputType = this.loginFormService.togglePassword(this.inputType);
  }

  

}
