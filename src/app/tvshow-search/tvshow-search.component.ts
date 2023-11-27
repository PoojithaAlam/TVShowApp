import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tvshow-search',
  templateUrl: './tvshow-search.component.html',
  styleUrls: ['./tvshow-search.component.css']
})
export class TvshowSearchComponent {
  search = new FormControl('', [Validators.minLength(2)])

  constructor(){
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(searchValue =>{
      if(!this.search.invalid)
    console.log(searchValue)})
  }

}
