

import { Component, ElementRef, HostListener, Input, ViewChild, AfterViewInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-dahira-scrol-top',
  styleUrls: ['./dahira-scrol-top.component.scss'],
  template: `
    <i #dahirBackTop class="fa fa-angle-up back-top ba-back-top" title="Back to Top"></i>
  `
})
export class DahiraScrolTopComponent implements AfterViewInit {

  @Input() position = 400;
  @Input() showSpeed = 500;
  @Input() moveSpeed = 1000;

  @ViewChild('dahirBackTop') _selector: ElementRef;

  ngAfterViewInit () {
    this._onWindowScroll();
  }

  @HostListener('click')
  _onClick(): boolean {
    jQuery('html, body').animate({scrollTop: 0}, {duration: this.moveSpeed});
    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll(): void {
    const el = this._selector.nativeElement;
    window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
  }
}















