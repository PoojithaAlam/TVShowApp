import { Component } from '@angular/core';
import { TvshowService } from './tvshow.service';
import { ItvShowDetails } from './itv-show-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TVShowApp';
  tvShowDetailNew:ItvShowDetails = {
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
  }

  doSearch(searchValue: string){
    const userInput = searchValue.split(",").map( s => s.trim())
    this.tvshowService.getTVSHOW(userInput[0]).subscribe(data=>this.tvShowDetailNew=data);
  }
}
