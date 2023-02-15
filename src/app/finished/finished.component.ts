import { Component } from '@angular/core';
import { ApprovalService } from '../approval.service';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss']
})
export class FinishedComponent {

  values:any = [];

  constructor(
    private approvalService:ApprovalService,
    ) {
      this.values[0] = this.approvalService.getApprovals(0);
      this.values[1] = this.approvalService.getApprovals(1);
      this.values[2] = this.approvalService.getApprovals(2);

      console.log(this.values);
    }


    submit()
    {
      if (confirm('Você deseja enviar essas informações?')) alert('Informações enviadas.')
    }

}
