import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidator } from 'src/app/_helpers/custom-validator';
import { IEpisode } from 'src/app/_interfaces/iepisode';
import { EpisodeService } from 'src/app/_services/episode.service';

@Component({
  selector: 'app-episode-edit-form',
  templateUrl: './episode-edit-form.component.html',
  styleUrls: ['./episode-edit-form.component.scss']
})
export class EpisodeEditFormComponent implements OnInit {
  editForm: FormGroup;
  formSuccess = false;
  id: number | any;
  episodes: IEpisode | any;

  constructor(private fb: FormBuilder, private episodeService: EpisodeService, private route: ActivatedRoute) {

    this.editForm = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      episode: ['', [
        Validators.required
      ]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getEpisode();
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

  get episode() {
    return this.editForm.get('episode');
  }

  private getEpisode(){
    this.episodeService.getEpisode(this.id).subscribe(res => {
      this.episodes = res;
      this.editForm.patchValue(this.episodes)
    });
  }
}
