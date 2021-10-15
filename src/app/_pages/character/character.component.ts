import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/_interfaces/icharacter';
import { CharacterService } from 'src/app/_services/character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  public characters: ICharacter[] = [];
  maxSize = 10;
  public perPage = 20;
  p: number = 1;
  public totalItems = 0;

  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCharacters(this.p);
  }

  getCharacters(page: number): void {
    this.p = page

    let params = {
      count: this.perPage,
      page: this.p
    }

    this.route.queryParams.subscribe(q => {
      params = {...params, ...q}
    });
    this.characterService.getCharacters(params).subscribe(res => {
      this.characters = res.results;
      this.totalItems = res.info.count;
    })
  }
}
