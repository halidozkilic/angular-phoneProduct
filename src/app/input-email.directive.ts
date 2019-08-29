import { Directive , HostListener, Host, ElementRef } from '@angular/core';
import { $ } from 'protractor';

@Directive({
  selector: '[appInputEmail]'
})
export class InputEmailDirective {

  constructor(private element:ElementRef) { }

 @HostListener('focus') onFocus(){

    this.element.nativeElement.value="naber";
    
    this.element.nativeElement.classList.add("bg-success")
    console.log('focus');

    
  }
  
  @HostListener('blur') onblur(){
    let value:string=this.element.nativeElement.value;

    if(!value.includes('@')){
      this.element.nativeElement.value=value+ '@gmail.com';
    }
    console.log('blur');
  }
}
