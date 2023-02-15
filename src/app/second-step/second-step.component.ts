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
    [Validators.required,Validators.minLength(3)]),
    state: new FormControl('', 
        [Validators.required,Validators.minLength(2)]),
    city: new FormControl('',
        [Validators.required,Validators.minLength(3)]),
    postalCode: new FormControl(null),
    receivePromotions: new FormControl(false),
  });

  constructor(
    private approvalService:ApprovalService,
    private formBuilder: FormBuilder
    ) {
      let settedValues:any = this.approvalService.getApprovals(1);

      if(settedValues){
        this.addressSection.controls.country.setValue(settedValues.country);
        this.addressSection.controls.state.setValue(settedValues.state);
        this.addressSection.controls.city.setValue(settedValues.city);
        this.addressSection.controls.postalCode.setValue(settedValues.postalCode);
        this.addressSection.controls.receivePromotions.setValue(settedValues.receivePromotions);
      }
    }


    testLog()
    {
      console.log(this.addressSection);
    }

    submit()
    {
      this.approvalService.approveForm(1,this.addressSection.value);
    }


}
