import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BobToursService } from 'src/app/services/bob-tours.service';
import _ from 'lodash';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  tour = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    public btService: BobToursService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id'); 
    // console.log(this.activatedRoute);
    // this.tour = this.activatedRoute.snapshot.params;
    this.tour = _.find(this.btService.tours, ['ID', parseInt(id)]);
  }

}


