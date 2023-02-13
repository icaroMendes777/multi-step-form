import { Component , OnInit} from '@angular/core';
import { ApprovalService } from '../approval.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit{

  name: string = 'asd';
  numberRegEx = [0-9];

  nameSection = new FormGroup({
    email:new FormControl('', 
    [Validators.required,Validators.email,Validators.minLength(5)]),
    firstName: new FormControl('', 
        [Validators.required,Validators.minLength(5)]),
    lastName: new FormControl('',
        [Validators.required,Validators.minLength(5)]),
    age: new FormControl(null,[Validators.required])
  });

  constructor(
    private approvalService:ApprovalService,
    private formBuilder: FormBuilder
    ) {
      //approvalService.alertTest();
      console.log(this.name)
    }

    ngOnInit() {
      //alert('oi');
    }
/*
    ngOnChanges()
    {
        alert('oi');
    }
 
    ngDoCheck(){
      alert('oi');
    }
 */  
    alertName()
    {
      alert(this.name);
    }

    submit()
    {
      console.log(this.nameSection);  
      
    }
  

    testLog()
    {
      console.log(this.nameSection);
      this.approvalService.approveForm(0,this.nameSection)
    }



}
