import { Component, Renderer2, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  isHorizontal: boolean = false;
  isDesktop: boolean = false;

  showFooter: boolean = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {

    this.updateFooterVisibility();

    this.renderer.listen('window', 'orientationchange', () => {

      this.updateFooterVisibility();

    });
    
  }

  


  //Verify if the screen is horizontal or vertical
  ngOnInit() {
    const ResizeEvent = new Event('resize');
    this.onResize(ResizeEvent); 
  }

  
  ngAfterViewInit() {

  
  }
  

  private updateFooterVisibility() {
    this.isHorizontal = window.innerWidth > window.innerHeight;
    this.isDesktop = window.innerWidth > 1080;

    if (this.isDesktop || this.isHorizontal==false) {
      this.showFooter = true;
    } else {
      this.showFooter = false;
    }
  }


}
