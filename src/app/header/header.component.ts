import { Component, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('login') login: ElementRef | undefined;
  @ViewChild('settings') settings: ElementRef | undefined;


  isRotated = false;

  constructor() { }

  // rotateIcon() {
  //   if (this.login) {
  //     this.login.nativeElement.style.transition = 'all 1s ease-in-out';
  //     this.login.nativeElement.style.transform = 'rotate(360deg)';
  //   }
  // }

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
