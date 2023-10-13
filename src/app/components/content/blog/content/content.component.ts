import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  contentWidth = 'calc(100% - 100px);'


  constructor() { }

  onWidthChanged(newWidth: string) {
    this.contentWidth = `calc(100% - ${newWidth})`;
  }
  

}
