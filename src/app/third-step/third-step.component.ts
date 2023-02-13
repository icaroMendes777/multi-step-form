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
    [Validators.required,Validators.minLength(5)]),
    
  });

  constructor(
    private approvalService:ApprovalService,
    private formBuilder: FormBuilder
    ) {
      //approvalService.alertTest();
      
    }


    submit()
    {
      alert('ok');
      console.log(this.commentSection);
    }

    testLog()
    {
      console.log(this.commentSection);
    }

}
