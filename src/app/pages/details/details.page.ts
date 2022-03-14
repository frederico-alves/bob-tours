import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BobToursService } from 'src/app/services/bob-tours.service';
// We import the FavoritesService and inject it as favService into the constructor.
import { FavoritesService } from 'src/app/services/favorites.service';
import _ from 'lodash';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  tour = null;
  // We also declare a boolean variable isFavorite
  isFavorite: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    public btService: BobToursService,
    public favService: FavoritesService
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id'); 
    // console.log(this.activatedRoute);
    // this.tour = this.activatedRoute.snapshot.params;
    this.tour = _.find(this.btService.tours, ['ID', parseInt(id)]);
    
    // we try to find the id of the given tour in the this.favSer- vice.favIDs array using indexOf
    this.isFavorite = this.favService.favIDs.indexOf(parseInt(id)) != -1;
  }

}


