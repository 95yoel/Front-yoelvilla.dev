import { Component } from '@angular/core';
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ParticlesService } from 'src/services/particles.service';
import { ScrollService } from 'src/services/scroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(public particlesService: ParticlesService,public scrollService:ScrollService) { }

    id = this.particlesService.id;

    position = "above";

    particlesVisible = this.particlesService.particlesVisible;

    particlesOptions: ISourceOptions = this.particlesService.particlesOptions;

    async particlesInit(engine: Engine): Promise<void> {
     console.log("init", engine);

     await loadFull(engine);
   }


   public particlesLoaded(container: Container): void {
     console.log("loaded", container);
   }


   


  ngOnInit(): void {
    
    this.scrollService.scrollToTop();

    this.scrollService.activateScrollBlock();
  }


}


  
