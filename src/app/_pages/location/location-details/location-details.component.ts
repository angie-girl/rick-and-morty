import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILocation } from 'src/app/_interfaces/ilocation';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  public location: ILocation | undefined;
  public id: number | any;

  constructor(private route: ActivatedRoute, private locationService: LocationService, private router: Router) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(){
    this.locationService.getLocation(this.id).subscribe(res => {
      this.location = res;
    });
  }

  goToEdit() {
    this.router.navigate(['/edit'])
  }
}
