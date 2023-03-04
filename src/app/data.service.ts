import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Coin } from './coin';
import { Enrollment } from './enrollment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonServerUrl = 'http://localhost:3000/coinPrice';
  private enrollmentUrl = 'http://localhost:3000/collegeEnrollment'

  constructor(private http: HttpClient) {}

  cryptoData():Observable<Coin[]> {
    return this.http.get<Coin[]>(this.jsonServerUrl);
  }

  enrollmentData():Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.enrollmentUrl);
  } 
}
