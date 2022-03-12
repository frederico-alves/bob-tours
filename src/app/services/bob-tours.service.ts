import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BobToursService {

  public regions: any;
  public tourtypes: any;

  //baseURL = 'https://bob-tours-app.firebaseio.com';
  baseUrl = 'https://bob-tours-app-14ed5-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) { }

  initialize() {
    this.getRegions()
    .then(data => this.regions = data);
    this.getTourtypes()
    .then(data => this.tourtypes = data);
  }

  getRegions() {
    let requestUrl =`${this.baseUrl}/Regions.json`;
    return this.http.get(requestUrl).toPromise();
  }

  getTourtypes() {
    let requestUrl = `${this.baseUrl}/Tourtypes.json`;
    return this.http.get(requestUrl).toPromise();
  }
}
