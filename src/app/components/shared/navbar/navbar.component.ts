import { Component, OnInit } from '@angular/core';
import { PlayService } from 'src/app/services/play.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  url: string;
  constructor(private play: PlayService) {}

  ngOnInit(): void {
    this.play.urlSong$.subscribe((resp) => {
      if (resp.includes('spotify')) {
        this.url = resp;
      } else {
        this.url = '';
      }
    });
  }
}
