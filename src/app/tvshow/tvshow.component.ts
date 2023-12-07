import { Component, Input } from '@angular/core';
import { ItvShowDetails } from '../itv-show-details';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})

export class TvshowComponent {
  @Input()
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

  // constructor(private tvshowService:TvshowService){
  //   this.tvshowService.getTVSHOW('girls').subscribe(data=>this.tvShowDetail=data);
    
  // }

  }
