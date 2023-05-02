import { Component, Input, OnInit, HostListener } from '@angular/core';
import { languages, notifications, userItems } from './header-dummy';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay: boolean = false;
  selectedLaguage: any;
  laguages = languages;
  notifications = notifications;
  userItems = userItems;


  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  constructor() { }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && (this.screenWidth > 768 || this.screenWidth > 715)) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLaguage = this.laguages[0];
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }

}
