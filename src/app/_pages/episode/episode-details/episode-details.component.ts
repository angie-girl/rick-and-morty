import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEpisode } from 'src/app/_interfaces/iepisode';
import { EpisodeService } from 'src/app/_services/episode.service';
import * as moment from "moment";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {
  public episode: IEpisode | undefined;
  public id: number | any;

  constructor(private route: ActivatedRoute, private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getEpisode();
    });
  }

  getEpisode(){
    this.episodeService.getEpisode(this.id).subscribe(res => {
      this.episode = res;
    });
  }

  formatDate(air_data: Date | undefined): string {
    return moment(air_data).format('DD MMMM YYYY')
  }
}
