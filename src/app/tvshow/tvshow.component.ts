import { Component } from '@angular/core';
import { ItvShowDetails } from '../itv-show-details';
import { TvshowService } from '../tvshow.service';

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

  }
