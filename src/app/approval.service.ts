
import { Injectable } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root',
})
export class ApprovalService {
  stepsApproved = [{},{},{}];
  /* . . . */

  constructor() {}

    alertTest()
    {
        alert('teste');
    }

  approveForm(index:number,values:any) {
    //return this.items;
    this.stepsApproved[index] = values;
    console.log('serv',this.stepsApproved);
    return;
  }

  getApprovals()
  {
    return this.stepsApproved;
  }

  /* . . . */
}
