import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FavoritesService } from './favorites.service';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BobToursService {

  public regions: any;
  public tourtypes: any;
  public tours: any;

  // MY FIREBASE URL DATABASE
  baseUrl = 'https://bob-tours-app-14ed5-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient,
              public favService: FavoritesService) { }

  initialize() {
    this.getRegions()
    .then(data => this.regions = data);
    this.getTourtypes()
    .then(data => this.tourtypes = _.sortBy(data, 'Name'));
    // .then(data => this.tourtypes = data);
    this.getTours().then(data => {
      this.tours = _.sortBy(data, 'Title')
      this.favService.initialize(this.tours)
    });
  }

  getRegions() {
    let requestUrl =`${this.baseUrl}/Regions.json`;
    return this.http.get(requestUrl).toPromise();
  }

  getTourtypes() {
    let requestUrl = `${this.baseUrl}/Tourtypes.json`;
    return this.http.get(requestUrl).toPromise();
  }

  getTours() {
    let requestUrl = `${this.baseUrl}/Tours.json`;
    return this.http.get(requestUrl).toPromise();
  }
}
