import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input() FormItems: any; 
  employeeName:any;
  constructor() { }

  ngOnInit(): void {
  this.employeeName = this.FormItems.slice(-1)[0]?.EmpName;
  }

}
