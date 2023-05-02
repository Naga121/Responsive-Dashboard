import { Component, Input, OnInit } from '@angular/core';
import { INavbarData, fadeInOut } from './helper';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul class="sublevel-nav" *ngIf="collapsed && data.items && data.items.length > 0 " [@submenu]="expanded
      ? { value : 'visible', params : { transitionParams : '400ms cubic-bezier(0.86, 0, 0.07, 1)', height : '*' }}
      : { value : 'hidden', params : { transitionParams : '400ms cubic-bezier(0.86, 0, 0.07, 1)', height : '0' }} "  >
      <li class="sublevel-nav-item" *ngFor="let item of data?.items">
        <a class="sublevel-nav-link" *ngIf="item.items" (click)="handleClick(item)" [ngClass]="getActiveClass(item)">
          <i class="sublevel-link-icon" [class]="item.icon"></i>
          <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
          <i *ngIf="item.items && collapsed" class="menu-collapse-icon" [ngClass]="!item.expanded ? 'bi bi-caret-right-fill' : 'bi bi-caret-down-fill' "></i>
        </a>
        <a class="sublevel-nav-link" *ngIf="!item.items || (item.items && item.items.length === 0)"
          [routerLink]="[item.routerLink]" routerLinkActive="active-sublevel" [routerLinkActiveOptions]="{exact:true}">
          <i class="sublevel-link-icon" [class]="item.icon"></i>
          <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
        </a>
        <div *ngIf="item.items && item.items.length > 0">
          <app-sublevel-menu [data]="item" [collapsed]="collapsed" [multiple]="multiple" [expanded]="item.expanded"></app-sublevel-menu>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{ transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SublevelMenuComponent implements OnInit {

  @Input() data: INavbarData = {
    routerLink: '',
    icon: '',
    label: '',
    items: []
  };

  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple = false;

  constructor(public router:Router){}

  ngOnInit(): void {}

  handleClick(item: any): void {
    if (this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (const modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }
  getActiveClass(item:INavbarData) {
    return item.expanded && this.router.url.includes(item.routerLink) ? 'active-sublevel' : '';
  }

}
