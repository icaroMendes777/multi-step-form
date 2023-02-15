/**
this service was created to manage a global state,
this is, the total of all the filled forms.

to be honest, there was no need to manage the forms in this way,
---this was made for study porpuse only.

to do all the forms under a single control woul have given it
a much cleaner structure.

*/



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

  getApprovals(index:number):any
  {
    //console.log(this.stepsApproved[index]);
    if( ! Object.keys(this.stepsApproved[index]).length)
        return false;

    return this.stepsApproved[index];
  }

  /* . . . */
}
