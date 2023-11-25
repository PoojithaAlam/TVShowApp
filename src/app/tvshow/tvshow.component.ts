import { Component } from '@angular/core';
import { ItvShowDetails } from '../itv-show-details';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})

export class TvshowComponent {
  tvShowDetail:ItvShowDetails = {
    showName: "girls",
    image: "",
    rating: 4,
    language: "english",
    genre: ["drama", "comedy"],
    country: "US",
    officialSite:"http",
    description: "Good"
  }

  // constructor(private tvShowService:TvshowService ){
  //   this.tvShowService.getTVSHOW('girls').subscribe(data=>this.tvShowDetail)
  // }

  }


