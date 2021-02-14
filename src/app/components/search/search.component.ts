import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [
    '../shared/nav/nav.component.css',
    './search.component.css',
    '../cards/cards.component.css',
    '../home/home.component.css',
  ],
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  tracks: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService, private router: Router) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.loading = true;
    if (!!termino) {
      this.spotify.search(termino).subscribe((matches: any) => {
        this.artists = matches.artists;
        this.tracks = matches.tracks;
      });
    } else {
      this.artists = this.tracks = [];
    }
    this.loading = false;
  }

  getArtist(id: string) {
    this.router.navigate(['/artist', id]);
  }
}
