import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClientService, MarvelInfo } from '../HeroService/http-client.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  public selectedId:number;
  public heroDetails:MarvelInfo;
  public displayConditionForOverview:boolean=false;
  public displayConditionForOriginalInfo:boolean=false;
  constructor(private httpClientService:HttpClientService,private activeRoute:ActivatedRoute,private router:Router) { }
  ngOnInit() {

    this.activeRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      this.selectedId=+paramMap.get('id');
      this.displaySelectedDetails(this.selectedId);
    });
  }
  displaySelectedDetails(id)
    {
      
      this.httpClientService.getHeroDetails(id).subscribe(response=>this.heroDetails=response);
    }

    originalInfo()
    {
      this.displayConditionForOverview=false;
      this.displayConditionForOriginalInfo=true;
      this.router.navigate(['originalInfo'],{relativeTo:this.activeRoute})
    }

    marvelInfo()
    {
      this.displayConditionForOverview=true;
      this.displayConditionForOriginalInfo=false;
      this.router.navigate(['marvelInfo'],{relativeTo:this.activeRoute})
    }
}
