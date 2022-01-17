import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chapterthree',
  templateUrl: './chapterthree.component.html',
  styleUrls: ['./chapterthree.component.css']
})
export class ChapterthreeComponent implements OnInit {
url='https://via.placeholder.com/550x380/FFB6C1/000000';
closeResult = '';
constructor(private modalService: NgbModal,config: NgbModalConfig) {
  config.backdrop = 'static';
    config.keyboard = false;
}

  ngOnInit(): void {
  }
  ChangeImage(id:string){
    debugger
    this.url=id;

  }

  open(content) {
    this.modalService.open(content, {centered: true, size: 'xl',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
