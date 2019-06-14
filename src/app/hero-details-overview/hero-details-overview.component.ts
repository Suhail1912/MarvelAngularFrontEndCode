import { Component, OnInit, Input } from '@angular/core';
import { HerosListComponent } from '../heros-list/heros-list.component';
import { MarvelInfo } from '../HeroService/http-client.service';

@Component({
  selector: 'app-hero-details-overview',
  templateUrl: './hero-details-overview.component.html',
  styleUrls: ['./hero-details-overview.component.css']
})
export class HeroDetailsOverviewComponent implements OnInit {
  //var object=new HerosListComponent();
  @Input() public selectedHeroObject;
  constructor() { }

  ngOnInit() {

    console.log(this.selectedHeroObject);

  }

}
