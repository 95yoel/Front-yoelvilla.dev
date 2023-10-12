import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  constructor(private scrollService:ScrollService) { }

  ngOnInit(): void {
    this.scrollService.deactivateScrollBlock();
  }

}
