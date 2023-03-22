import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEpisode } from 'src/app/_interfaces/iepisode';
import { EpisodeService } from 'src/app/_services/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  episodes: IEpisode[] = [];
  maxSize = 10;
  perPage = 20;
  p: number = 1;
  totalItems = 0;

  constructor(private episodeService: EpisodeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEpisodes(this.p);
  }

  getEpisodes(page: number): void {
    this.p = page

    let params = {
      count: this.perPage,
      page: this.p
    }

    this.route.queryParams.subscribe(q => {
      params = {...params, ...q}
    });
    this.episodeService.getEpisodes(params).subscribe(res => {
      this.episodes = res.results;
      this.totalItems = res.info.count;
    })
  }
}
