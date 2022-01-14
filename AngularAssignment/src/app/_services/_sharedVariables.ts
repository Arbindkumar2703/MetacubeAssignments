import { BehaviorSubject } from "rxjs";

export class _sharedVariables{

    //default language
    private isOpen:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
public isOpenNow:boolean=false;
    public getToggelState(){
      
      return this.isOpen.asObservable();
    }
  
    public updateToggelState(){
      this.getToggelState().subscribe(currentState=>this.isOpenNow=currentState);
      this.isOpen.next(!this.isOpenNow);
    }
  }