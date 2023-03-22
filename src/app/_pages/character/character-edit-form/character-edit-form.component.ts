import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidator } from 'src/app/_helpers/custom-validator';
import { ICharacter } from 'src/app/_interfaces/icharacter';
import { CharacterService } from 'src/app/_services/character.service';

@Component({
  selector: 'app-character-edit-form',
  templateUrl: './character-edit-form.component.html',
  styleUrls: ['./character-edit-form.component.scss']
})
export class CharacterEditFormComponent implements OnInit {
  editForm: FormGroup;
  formSuccess = false;
  id: number | any;
  character: ICharacter | any;

  constructor(private fb: FormBuilder, private characterService: CharacterService, private route: ActivatedRoute) {

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
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getCharacter();
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

  get species() {
    return this.editForm.get('species');
  }

  get status() {
    return this.editForm.get('status');
  }

  private getCharacter(){
    this.characterService.getCharacter(this.id).subscribe(res => {
      this.character = res;
      this.editForm.patchValue(this.character)
    });
  }
}
