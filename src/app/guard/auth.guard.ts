import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private toastr:ToastrService){}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if ( this.authService.isloggedIn() ) {
      return true;
    }else{
      this.router.navigate(['login']);
      this.toastr.warning("You don't have an access, Please login your account")
      return false;
    }
  }

}
