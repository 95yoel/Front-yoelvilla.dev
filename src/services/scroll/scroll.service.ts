import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  isHorizontal: boolean = false;
  isDesktop: boolean = false;

  constructor() { }

  //*******************Handle scroll events*************

  //Prevent default scroll behavior

  scrollBlock(event: Event) {
    event.preventDefault();
  }

  //Detect when the document is scrolled and block the scroll

  @HostListener('document:touchmove', ['$event'])
  onDocumentTouchMove(event: Event) {
    this.scrollBlock(event);
  }

  //Detect when the mouse wheel is used and block the scroll

  @HostListener('document:wheel', ['$event'])
  onDocumentWheel(event: Event) {
    this.scrollBlock(event);
  }

  //Block scroll

  activateScrollBlock() {
    document.body.style.overflow = 'hidden';
  }

  //Unblock scroll
  deactivateScrollBlock() {
    document.body.style.overflow = 'auto';
  } 

  //block horizontal scroll

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isHorizontal = window.innerWidth > window.innerHeight;
    this.isDesktop = window.innerWidth > 1080;

    if (this.isHorizontal) {
      
      this.deactivateScrollBlock(); 
    } else {
      
      this.activateScrollBlock(); 
    }

  }

  blockScrollbyPixel(value: number) {
    if(window.innerWidth>value){
      this.scrollToTop();
      this.activateScrollBlock();
    }
  }

  
  //Move scroll to top

  scrollToTop() {
    window.scrollTo(0, 0);
  }


}
