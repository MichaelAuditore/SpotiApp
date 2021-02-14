import { Component, OnInit } from '@angular/core';
import { PlayService } from './services/play.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'spotify';
  passedUrl: string = '';

  constructor(private play: PlayService) {}

  ngOnInit() {
    this.play.urlSong$.subscribe((res) => {
      this.passedUrl = res;
    });
  }
}
