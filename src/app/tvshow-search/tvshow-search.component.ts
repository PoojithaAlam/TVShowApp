import { Component, EventEmitter, Output} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tvshow-search',
  templateUrl: './tvshow-search.component.html',
  styleUrls: ['./tvshow-search.component.css']
})
export class TvshowSearchComponent {

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  search = new FormControl('', [Validators.minLength(2)]);
  
  constructor(){
    this.search.valueChanges
    .pipe(debounceTime(100))
    .subscribe(searchValue =>{
      if(!this.search.invalid)
      this.searchEvent.emit(searchValue??undefined);
  })
  }

}


