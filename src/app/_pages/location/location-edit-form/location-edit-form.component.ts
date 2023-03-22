import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidator } from 'src/app/_helpers/custom-validator';
import { ILocation } from 'src/app/_interfaces/ilocation';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'app-location-edit-form',
  templateUrl: './location-edit-form.component.html',
  styleUrls: ['./location-edit-form.component.scss']
})
export class LocationEditFormComponent implements OnInit {
  editForm: FormGroup;
  formSuccess = false;
  id: number | any;
  location: ILocation | any;

  constructor(private fb: FormBuilder, private locationService: LocationService, private route: ActivatedRoute) {

    this.editForm = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      dimension: ['', [
        Validators.required
      ]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getLocation();
    });
  }

  submitHandler(): void {
    if (this.editForm.valid) {
      const data = this.editForm.value;
      this.formSuccess = true;
      console.log(data);
    } else {
      CustomValidator.markAsTouched(this.editForm);
    }
  }

  get name() {
    return this.editForm.get('name');
  }

  get dimension() {
    return this.editForm.get('dimension');
  }

  private getLocation(){
    this.locationService.getLocation(this.id).subscribe(res => {
      this.location = res;
      this.editForm.patchValue(this.location)
    });
  }
}
