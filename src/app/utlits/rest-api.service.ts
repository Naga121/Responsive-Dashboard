import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  callPostApi(url:string, body:any, options:any){
    return this.http.post(url,body,{}).pipe( tap(
      data => data,
      error => error
    ));
  }

}
