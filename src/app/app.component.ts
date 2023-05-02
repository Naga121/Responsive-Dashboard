import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
interface SideNavToggle{
  screenWidth:number,
  collapsed:boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular15';
  isSideNavCollepsed=false;
  screenWidth=0;

  constructor(public loader:LoaderService){ }

  onToggleSideNav(data:SideNavToggle):void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollepsed=data.collapsed
  }

}
