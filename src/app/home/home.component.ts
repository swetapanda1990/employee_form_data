import { Component, OnInit, Output,EventEmitter, Input   } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  regiForm: FormGroup;  
  EmpName:string='';  
  DOB:any = null;  
  Gender:string='';  
  Designation:string='';  
  Email:string='';
  mobile:any='';
  formSubmitData:any = [];

  constructor(private fb: FormBuilder,private router:Router,private dataService: DataService) {   
  
  
    // To initialize FormGroup  
    this.regiForm = fb.group({  
      'EmpName' : [null, Validators.required],  
      'DOB' : [null, Validators.required],  
      'Gender':[null, Validators.required],  
      'Designation':[null, Validators.required],  
      'Email':[null, Validators.compose([Validators.required,Validators.email])],
      'mobile':[null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]


    });  
  
  }  
    ngOnInit(){}
// Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  { 
    this.dataService.addFormData(form)
    this.router.navigate(['data']);
  }  

}


