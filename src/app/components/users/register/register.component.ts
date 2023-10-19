import { Component, HostListener } from '@angular/core';
import { ScrollService } from 'src/services/scroll/scroll.service';

//import services
import { ParticlesService } from 'src/services/particles/particles.service';

//import particles.ts
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  

  constructor(public scrollService:ScrollService,public particlesService: ParticlesService) { }

    particlesVisible = this.particlesService.particlesVisible;

    particlesOptions: ISourceOptions = this.particlesService.particlesOptions;

    id = this.particlesService.id;

  ngOnInit(): void {
      
      this.scrollService.scrollToTop();
              
      this.scrollService.controleScroll(650);

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


