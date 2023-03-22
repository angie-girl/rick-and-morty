import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private router: Router) { }

  goToCharacter() {
    this.router.navigate(['/character']);
  }

  goToLocation() {
    this.router.navigate(['/location']);
  }

  goToEpisodes() {
    this.router.navigate(['/episode']);
  }

}
