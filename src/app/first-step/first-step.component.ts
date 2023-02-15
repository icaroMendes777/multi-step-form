import { Component , OnInit} from '@angular/core';
import { ApprovalService } from '../approval.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';



@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit{

  name: string = 'asd';
  numberRegEx = [0-9];

  nameSection = new FormGroup({
    email:new FormControl((''), 
    [Validators.required,Validators.email,Validators.minLength(5)]),
    firstName: new FormControl('', 
        [Validators.required,Validators.minLength(3)]),
    lastName: new FormControl('',
        [Validators.required,Validators.minLength(3)]),
    
  });

  constructor(
    private approvalService:ApprovalService,
    private formBuilder: FormBuilder
    ) {

      let settedValues:any = this.approvalService.getApprovals(0);

      if(settedValues){
        this.nameSection.controls.email.setValue(settedValues.email);
        this.nameSection.controls.firstName.setValue(settedValues.firstName);
        this.nameSection.controls.lastName.setValue(settedValues.lastName);
  
      }
      
    }

    validateOnlyNumbers(str:any)
    {
      let pattern = /^[0-9]*$/;
      return pattern.test(str);
    }

    validateMinAge(age:any)
    {
    
      let a = parseInt(age);
      return( a >= 6);
    }

    validateMaxAge(age:any)
    {
      let a = parseInt(age);
      return (a<122);
    }

    ngOnInit() {
      //alert('oi');
    }

    alertName()
    {           
      alert(this.name);
    }

    submit()
    {
      this.approvalService.approveForm(0,this.nameSection.value);
    }
  

    testLog()
    {
      console.log(this.nameSection);
      this.approvalService.approveForm(0,this.nameSection)
    }



}
