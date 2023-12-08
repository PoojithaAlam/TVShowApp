import { Component } from '@angular/core';
import { ItvShowDetails } from './itv-show-details';
import { TvshowService } from './tvshow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TVShowApp';
  TvShowDetailNew :ItvShowDetails ={
    showName:"",
    language:"",
    genre:[],
    rating:0,
    country:"",
    image:"",
    officialSite:"",
    description:""
  }

  constructor (private tvShowService: TvshowService){
   
  }

  searchText:string ='';

  doSearch(searchValue:string){
    this.searchText = searchValue;
    // console.log(this.searchText)
    const userInput = searchValue.trim();
    this.tvShowService.getTVSHOW(searchValue).subscribe(data=> this.TvShowDetailNew =data);
  }

  onHome(){
    this.searchText ="";
  }  
  
  
}
