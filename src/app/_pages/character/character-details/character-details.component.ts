import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from 'src/app/_interfaces/icharacter';
import { CharacterService } from 'src/app/_services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  public character: ICharacter | undefined;
  public id: number | any;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getCharacter();
    });
  }

  getCharacter(){
    this.characterService.getCharacter(this.id).subscribe(res => {
      this.character = res;
    });
  }
}
