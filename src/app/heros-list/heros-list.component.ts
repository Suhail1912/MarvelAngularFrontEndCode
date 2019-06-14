import { Component, OnInit } from '@angular/core';
import { HttpClientService, MarvelInfo } from '../HeroService/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit {

  marvelHeros:MarvelInfo[];
  public selectedHeroDetails:MarvelInfo;
  constructor(private httpClientService:HttpClientService,private router:Router,private activeRoute:ActivatedRoute) 
  { 

  }

  ngOnInit() {
      this.httpClientService.getMarvelDetails()
      .subscribe(
        response =>this.marvelHeros=response
       );
     }

     selectedHero(selectedHeroDetails)
     {
       console.log(selectedHeroDetails.id)
        this.router.navigate([selectedHeroDetails.id],{relativeTo:this.activeRoute});  
     }
}
