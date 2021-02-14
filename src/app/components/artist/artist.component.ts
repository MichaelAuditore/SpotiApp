import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { PlayService } from 'src/app/services/play.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: [
    '../home/home.component.css',
    './artist.component.css',
    '../cards/cards.component.css',
  ],
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  tracks: any[] = [];
  loading: boolean;
  @Output() previewUrl: EventEmitter<string>;

  constructor(
    private spotify: SpotifyService,
    private router: ActivatedRoute,
    private play: PlayService
  ) {}

  ngOnInit() {
    this.previewUrl = new EventEmitter();
    this.loading = true;
    this.router.params.subscribe((params) => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe((artist) => {
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((tops) => {
      this.tracks = tops;
    });
  }

  playSong(url: string) {
    this.play.changeUrl(url);
  }
}
