import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chapterfour',
  templateUrl: './chapterfour.component.html',
  styleUrls: ['./chapterfour.component.css']
})
export class ChapterfourComponent implements OnInit {
  url='https://via.placeholder.com/550x380/FFB6C1/000000';
  closeResult = '';

  code = `
  import { Directive, ElementRef, HostListener, Renderer2, EventEmitter, Output } from '@angular/core';

  @Directive({
    selector: '[appToggleShow]'
  })
  export class CommonDirective {
  
    constructor(private el: ElementRef, private renderer: Renderer2) {
      // this.ChangeBgColor('red');
    }
    @Output() displayChanged: EventEmitter<number> =   new EventEmitter();
    @HostListener('mouseover') onMouseOver() {
      this.ChangeBgColor('red');
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.ChangeBgColor('#17a2b8');
    }
  
    ChangeBgColor(color: string) {
  
      this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    }
  
    @HostListener('click') onClick() {
      this.displayChanged.emit(1);
    }
  
  }
  `;
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
  
    open(content: any) {
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
  