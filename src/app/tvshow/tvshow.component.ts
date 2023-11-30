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
    showName: "",
    image: "",
    rating: 0,
    language: "",
    genre: [],
    country: "",
    officialSite:"",
    description: ""
  }

  constructor(private tvshowService:TvshowService){
    this.tvshowService.getTVSHOW('girls').subscribe(data=>this.tvShowDetail=data);
    
  }

  }
