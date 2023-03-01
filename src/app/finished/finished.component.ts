import { Component } from '@angular/core';
import { ApprovalService } from '../approval.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss']
})
export class FinishedComponent {

  values:any = [];

  constructor(
    private approvalService:ApprovalService,
    private router: Router,
    ) {
      this.values[0] = this.approvalService.getApprovals(0);
      this.values[1] = this.approvalService.getApprovals(1);
      this.values[2] = this.approvalService.getApprovals(2);

      console.log(this.values);
    }


    submit()
    {
      if (confirm('Você deseja enviar essas informações?')){
        this.router.navigate(['/success'])
         //window.location.href = '/' ;
        }
      return;
    }

}
