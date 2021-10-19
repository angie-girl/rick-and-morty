import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CustomValidator } from 'src/app/_helpers/custom-validator';
import { ICharacter } from 'src/app/_interfaces/icharacter';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  @Input() character: ICharacter | undefined;
  @Output() event: Subject<boolean> = new Subject<boolean>();

  editForm: FormGroup;
  formSuccess = false;

  constructor(private fb: FormBuilder) {

    this.editForm = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      species: ['', [
        Validators.required
      ]],
      status: ['', [
        Validators.required
      ]]
    });
  }

  ngOnInit(): void {
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

  get species() {
    return this.editForm.get('species');
  }

  get status() {
    return this.editForm.get('status');
  }
}
