import { Component } from '@angular/core';
import { ItvShowDetails } from '../itv-show-details';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})

export class TvshowComponent {
  tvShowDetail:ItvShowDetails = {
    showName: "A",
    image: "B",
    rating: 0,
    language: "C",
    genre: ["drama"],
    country: "D",
    officialSite:"E",
    description: "F"
  }

  }

