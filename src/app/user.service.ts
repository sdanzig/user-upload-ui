import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    // Method stub
    return new Observable(observer => {
      observer.complete();
    });
  }
}
