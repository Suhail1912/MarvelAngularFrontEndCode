import { Component, OnInit, Input } from '@angular/core';
import { MarvelInfo } from '../HeroService/http-client.service';

@Component({
  selector: 'app-hero-details-origianl-info',
  templateUrl: './hero-details-origianl-info.component.html',
  styleUrls: ['./hero-details-origianl-info.component.css']
})
export class HeroDetailsOrigianlInfoComponent implements OnInit {
  @Input() public selectedHeroObject;
  constructor() { }

  ngOnInit() {
  }

}
