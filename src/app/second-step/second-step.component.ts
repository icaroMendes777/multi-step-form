import { Component } from '@angular/core';
import { ApprovalService } from '../approval.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent {


  name: string = 'asd';
  numberRegEx = [0-9];

  addressSection = new FormGroup({
    country:new FormControl('', 
    [Validators.required,Validators.minLength(5)]),
    state: new FormControl('', 
        [Validators.required,Validators.minLength(5)]),
    city: new FormControl('',
        [Validators.required,Validators.minLength(5)]),
    postalCode: new FormControl(null,[Validators.required]),
    receivePromotions: new FormControl(false),
  });

  constructor(
    private approvalService:ApprovalService,
    private formBuilder: FormBuilder
    ) {
      //approvalService.alertTest();
      console.log(this.name)
    }


    submit()
    {
      alert('ok');
      console.log(this.addressSection);
    }

    testLog()
    {
      console.log(this.addressSection);
    }




}
