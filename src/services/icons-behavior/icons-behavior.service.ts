import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsBehaviorService {

  constructor() { }

  // Funtion to rotate elements (icons) 360 degrees

  rotateIcon(element: ElementRef | HTMLElement | undefined) {
    if (element) {
      if (element instanceof ElementRef) {
        element.nativeElement.style.transition = 'all 1s ease-in-out';
        element.nativeElement.style.transform = 'rotate(360deg)';
        setTimeout(() => {
          element.nativeElement.style.transform = 'rotate(0deg)';
        }, 1000);
        
      } else {
        element.style.transition = 'all 1s ease-in-out';
        element.style.transform = 'rotate(360deg)';
        setTimeout(() => {
          element.style.transform = 'rotate(0deg)';
        }, 1000);

        
      }
    }
  }



}
