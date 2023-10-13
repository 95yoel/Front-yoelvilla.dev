import { Component, ViewChild,ElementRef } from '@angular/core';
import { IconsBehaviorService } from '../../../../services/icons-behavior/icons-behavior.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private iconsBehaviorService:IconsBehaviorService) { }

  rotateIcon(element: ElementRef | HTMLElement | undefined) {
    this.iconsBehaviorService.rotateIcon(element);
  }
  

}
