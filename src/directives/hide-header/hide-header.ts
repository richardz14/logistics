import { Directive,ViewChild, Renderer, Input,ElementRef } from '@angular/core';
import { Content } from 'ionic-angular';

/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hide-header]', // Attribute selector
  host : {
    '(ionScroll)': 'onContentScroll($event)',
  }
})
export class HideHeaderDirective {
  @ViewChild("contentRef") contentHandle: Content;
  private tabBarHeight;
  private topOrBottom:string;
  private contentBox;
  header: any;
  headerHeight: Number = 56;
  translateAmt: any;
  scrollPosition: number = 0;
  lastScrollTop: number = 0;
  constructor(public element: ElementRef, public renderer: Renderer) {
    //console.log('Hello HideHeaderDirective Directive');
  }
  ngOnInit(){
    // ion-header classname
  //  this.header = document.getElementsByClassName("shrinkable")[0];
    // the height of the header
  // this.headerHeight = this.header.clientHeight;
  this.header = document.getElementsByClassName("shrinkable")[0]; 
  this.headerHeight = this.header.clientHeight;
}
ngAfterViewChecked() {
 this.header = document.getElementsByClassName("shrinkable")[0]; 
 this.headerHeight = this.header.clientHeight;
}
onContentScroll(ev) {
 this.scrollPosition = ev.scrollTop;
   if (this.scrollPosition > this.lastScrollTop && this.scrollPosition >= 25) {
     // scrolling down
     this.renderer.setElementStyle(this.header, 'transition', 'all 0.3s linear');
     this.renderer.setElementStyle(this.header, 'transform', 'translateY(-' + this.headerHeight + 'px)');
   } else {
     // scrolling up
     this.renderer.setElementStyle(this.header, 'transform', 'translateY(0px)');
   }
   // reset
   this.lastScrollTop = this.scrollPosition;
}
}
