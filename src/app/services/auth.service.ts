import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer, Subject, observeOn, throwError } from 'rxjs';
import { RestApiService } from '../utlits/rest-api.service';
import { GlobalUrl } from '../utlits/global-urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = "http://localhost:3000/api";

  constructor(private http: HttpClient, private router: Router, private restApis: RestApiService) { }

  register(user: any) {
    return new Observable((observer: Observer<any>) => {
      this.restApis.callPostApi(`${GlobalUrl.signUpUrl}`, user, {}).subscribe(res => {
        observer.next(res);
      }, error => {
        observer.error(error)
      });
    });
  }

  login(payload: any) {
    return new Observable((observer: Observer<any>) => {
      this.restApis.callPostApi(GlobalUrl.loginUrl,payload,{}).subscribe(res=>{
        observer.next(res);
      },error=>{
        observer.error(error)
      })
    })
  }

  getToken() {
    return localStorage.getItem('user');
  }

  isloggedIn(): boolean {
    let authToken = this.getToken();
    return authToken !== null ? true : false;
  }

  logout() {
    let removeToken = localStorage.removeItem('currentUser');
    if (removeToken == null) {
      this.router.navigate(['/login']);
    }
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code : ${error.status} \n Message : ${error.message} `
    }
    return throwError(msg)
  }

}
