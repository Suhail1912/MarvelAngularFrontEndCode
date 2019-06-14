import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export class MarvelInfo
{
  constructor(
    public id:number,
    public name:string,
    public origianlName:string,
    public role:string,
  ) {}
}




@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  
  constructor(private httpClient:HttpClient)
  {

  }

  getMarvelDetails(status ? :string):Observable<MarvelInfo[]>
  {
    if(status!=undefined)
    {

        console.log("top");
        return this.httpClient.get<MarvelInfo[]>("http://localhost:8080/marvel/topHeros");
    }
    else{
        console.log("all   "+status);
      return  this.httpClient.get<MarvelInfo[]>("http://localhost:8080/marvel")
              
    }
   
  }

  getHeroDetails(id:number):Observable<MarvelInfo>
  {
    return this.httpClient.get<MarvelInfo>("http://localhost:8080/marvel/"+id);
  }

 
}
