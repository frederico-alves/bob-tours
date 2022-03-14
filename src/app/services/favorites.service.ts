import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  public favIDs: Array<number>;
  public favTours: Array<any>;

  constructor() { }

  //GET ALL TOURS FROM BobToursService
  initialize (tours) {
    this.favTours = [];
    this.favIDs = JSON.parse(window.localStorage.getItem('FavoritesIDs'));
    if(this.favIDs == null) {
      this.favIDs = [];
    } else {
      tours.forEach(tour => {
        if (this.favIDs.indexOf(tour.ID) != -1) {
          this.favTours.push(tour);
        }
      });
    }
  }

  //react to the fact that the user has clicked the "Add to Favorites" button
  add(tour) {
    this.favIDs.push(tour.ID);
    this.favTours.push(tour);
    window.localStorage.setItem('FavoritesIDs', JSON.stringify(this.favIDs));
  }

  //react to the fact that the user has clicked the "Remove from Favorites" button
  remove(tour) {
    let removeIndex:number = this.favIDs.indexOf(tour.ID);
    if (removeIndex != -1) {
      this.favIDs.splice(removeIndex, 1);
      this.favTours.splice(removeIndex, 1);
      window.localStorage.setItem('FavoritesIDs', JSON.stringify(this.favIDs));
    }
  }

}
