import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { PlayService } from 'src/app/services/play.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: [
    '../home/home.component.css',
    './album.component.css',
    '../cards/cards.component.css',
  ],
})
export class AlbumComponent implements OnInit {
  album: any = {};
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
      this.getAlbum(params['id']);
    });
  }

  getAlbum(id: string) {
    this.spotify.getAlbum(id).subscribe((album: any) => {
      this.album = album.album;
      this.tracks = album.tracks;
      this.loading = false;
    });
  }

  playSong(url: string) {
    this.play.changeUrl(url);
  }
}
