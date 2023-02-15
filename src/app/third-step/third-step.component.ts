import { Component } from '@angular/core';
import { ApprovalService } from '../approval.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class ThirdStepComponent {


  commentSection = new FormGroup({
    comment:new FormControl('', 
    [Validators.required,Validators.minLength(50)]),
    
  });

  constructor(
    private approvalService:ApprovalService,
    private formBuilder: FormBuilder
    ) {
      let settedValues:any = this.approvalService.getApprovals(2);

      if(settedValues){
        this.commentSection.controls.comment.setValue(settedValues.comment);
        
      }
      
    }


    submit()
    {
      console.log(this.commentSection.value)
      this.approvalService.approveForm(2,this.commentSection.value);
    }


    testLog()
    {
      console.log(this.commentSection);
    }

}
