import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';
import { ItvShowDetailsData } from './itv-show-details-data';
import { ItvShowDetails } from './itv-show-details';


@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor(private httpClient: HttpClient) { }
  getTVSHOW(name:string){
    return this.httpClient.get<ItvShowDetailsData>(`https://api.tvmaze.com/singlesearch/shows?q=${name}`).pipe(map(data =>this.transformToItvShow(data)))

 }
 private transformToItvShow(data:ItvShowDetailsData): ItvShowDetails {
  
  return{
    showName:data.name,
    image:data.image.original,
    rating:data.rating.average,
    language:data.language,
    genre:data.genres,
    country:data.network.country.name,
    officialSite:data.network.officialSite,
    description:(data.summary).replace(/<[^>]*>/g, '')
  }
}

} 
