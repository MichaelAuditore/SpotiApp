import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newAlbums: any[] = [];
  newSingles: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = true;

    this.spotify.getToken().subscribe((data: any) => {
      this.spotify.token = data.access_token
      this.spotify.getNewRelases().subscribe((releases: any) => {
        releases.forEach((item: any) => {
          if (item.album_type === 'album') {
            this.newAlbums.push(item);
          } else {
            this.newSingles.push(item);
          }
        });
        this.loading = false;
      });
    })
  }

  ngOnInit(): void { }
}
