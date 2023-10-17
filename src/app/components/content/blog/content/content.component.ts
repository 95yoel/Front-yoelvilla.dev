import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8000/').subscribe((data)=>{
      console.log(data);
    
    
    });

  }
  





}
