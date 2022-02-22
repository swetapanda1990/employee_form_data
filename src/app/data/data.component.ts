import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  constructor(private data: DataService) { }

  ngOnInit(): void {
    
  }

  get FormItems() {
     return this.data.getFormData();
   }
}
