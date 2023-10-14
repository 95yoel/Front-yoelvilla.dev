import { Component, Renderer2, HostListener, OnInit } from '@angular/core';


import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ParticlesService } from 'src/services/particles/particles.service';
import { ScrollService } from 'src/services/scroll/scroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  //postion for snakcbar
  position = "above";

  //variables for particles

  id = this.particlesService.id;

  particlesVisible = this.particlesService.particlesVisible;

  particlesOptions: ISourceOptions = this.particlesService.particlesOptions;

  constructor(public particlesService: ParticlesService,
              public scrollService:ScrollService,
              private renderer:Renderer2) { }


    //PARTICLES JS FUNCTIONS ************

    //Inicialize particles

    async particlesInit(engine: Engine): Promise<void> {
     console.log("init", engine);

     await loadFull(engine);
   }


   //check if particles are loaded **DELETE ON PROD**

   public particlesLoaded(container: Container): void {
     console.log("loaded", container);
   }

   
  ngAfterViewInit() {
    
    //Block scroll by window width
    this.scrollService.blockScrollbyPixel(900);

    //Listen for orientation change and block scroll if the screen is horizontal

    this.renderer.listen('window', 'orientationchange', () => {

      const ResizeEvent = new Event('resize');
      this.scrollService.onResize(ResizeEvent);

      if (this.scrollService.isHorizontal ) {
        
        this.scrollService.activateScrollBlock();
        
      } else {
        
        this.scrollService.scrollToTop();
        this.scrollService.deactivateScrollBlock(); 
      }


    });
  }
  

  


}


  
