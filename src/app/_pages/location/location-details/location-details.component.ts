import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILocation } from 'src/app/_interfaces/ilocation';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  location: ILocation | undefined;
  id: number | any;

  constructor(private route: ActivatedRoute, private locationService: LocationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getLocation();
    });
  }

  private getLocation(){
    this.locationService.getLocation(this.id).subscribe(res => {
      this.location = res;
    });
  }
}
