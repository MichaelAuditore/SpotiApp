import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PlayService } from 'src/app/services/play.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() items: any[] = [];
  previewUrl: string;

  constructor(private router: Router, private play: PlayService) {}

  ngOnInit() {}

  getImages(item: any) {
    return !!item.images ? item.images : item.album.images;
  }

  getArtist(id: string) {
    this.router.navigate(['/artist', id]);
  }

  getAlbum(id: string) {
    this.router.navigate(['/album', id]);
  }

  playAlbum(id: string) {
    const URL = `https://open.spotify.com/embed?uri=${id}`;
    this.play.changeUrl(URL);
  }
}
