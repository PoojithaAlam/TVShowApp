export interface ItvShowDetailsData {
  name: string,
  image: {medium: string, original:string},
  rating: {average: number},
  language: string,
  genres: string[],
  network: {
    country :{name: string},
    officialSite:string
  },  
  summary: string
}


