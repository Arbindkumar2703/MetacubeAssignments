import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private toastr: ToastrService) { }

  LogMyDetails(data:any,type:string){
    if(type==='success'){
    this.toastr.success("Data logged : "+JSON.stringify(data),'',{'easeTime':500,'positionClass':'toast-top-center', 'enableHtml': true});
    }
    if(type==='error'){
      this.toastr.error("Data logged : "+JSON.stringify(data),'',{'easeTime':500,'positionClass':'toast-top-center', 'enableHtml': true});
    }
    if(type==='warning'){
      this.toastr.warning("Data logged : "+JSON.stringify(data),'',{'easeTime':500,'positionClass':'toast-top-center', 'enableHtml': true});
    }
    if(type==='info'){
      this.toastr.info("Data logged : "+JSON.stringify(data),'',{'easeTime':500,'positionClass':'toast-top-center', 'enableHtml': true});
    }
  }
}
