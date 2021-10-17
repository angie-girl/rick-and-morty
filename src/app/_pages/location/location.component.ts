import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILocation } from 'src/app/_interfaces/ilocation';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public locations: ILocation[] = [];
  maxSize = 10;
  public perPage = 20;
  p: number = 1;
  public totalItems = 0;

  constructor(private locationService: LocationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLocations(this.p);
  }

  getLocations(page: number): void {
    this.p = page

    let params = {
      count: this.perPage,
      page: this.p
    }

    this.route.queryParams.subscribe(q => {
      params = {...params, ...q}
    });
    this.locationService.getLocations(params).subscribe(res => {
      this.locations = res.results;
      this.totalItems = res.info.count;
    })
  }
}
