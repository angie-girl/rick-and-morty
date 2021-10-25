import {FormArray, FormControl, FormGroup} from '@angular/forms';

export class CustomValidator {
  static markAsTouched(group: FormGroup | FormArray) {
    group.markAsTouched({onlySelf: true});

    Object.keys(group.controls).map((field) => {
      const control = group.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.markAsTouched(control);
      } else if (control instanceof FormArray) {
        this.markAsTouched(control);
      }
    });
  }
}
