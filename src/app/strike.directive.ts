import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrike]'
})
export class StrikeDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClicks(){
    this.textDeco("line-through");
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("none");
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }

}
