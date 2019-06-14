import { Component, OnInit } from '@angular/core';
import { HttpClientService, MarvelInfo } from '../HeroService/http-client.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  public marvelHeros:MarvelInfo[];
  constructor(private httpClientService:HttpClientService ) 
  { 

  }
  ngOnInit() {
      this.httpClientService.getMarvelDetails("topheros")
      .subscribe(
        response =>this.marvelHeros=response
       );
     }

}
