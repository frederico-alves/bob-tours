import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  // INJECTED FAVORITES DATA
  // tours = [
  //   { ID: 1, Title: 'City walk'},
  //   { ID:2, Title: 'On the trails of Beethoven'},
  //   { ID:3, Title: 'Villa Hammershcmidt'}
  // ];

  constructor(public favService: FavoritesService) { }

  ngOnInit() {
  }

}
