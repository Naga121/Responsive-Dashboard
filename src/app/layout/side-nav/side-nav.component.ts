import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, animation, keyframes, style, transition, trigger } from '@angular/animations';
import { INavbarData, fadeInOut } from './helper';
import { Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number,
  collapsed: boolean
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ Transform: 'rotate(0deg)', offset: '0' }),
            style({ Transform: 'rotate(2turn)', offset: '1' })
          ])
        )
      ])
    ])
  ]
})
export class SideNavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed: boolean = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = true;

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  constructor(public router:Router){}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
  handleClick(data:INavbarData):void{
    this.shrinkItem(data)
    data.expanded = !data.expanded;
  }
  getActiveClass(data:INavbarData): string {
    return this.router.url.includes(data.routerLink) ? 'active' :'' ;
  }
  shrinkItem(data:INavbarData):void{
    if (this.multiple) {
      for (const modelItem of this.navData) {
        if (data !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }



}
