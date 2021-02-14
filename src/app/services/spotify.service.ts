import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: string =
    'BQAs5GQzG_0szuCNFC3N53sKZVC_KCFF3xZ7FtnpxIDMykbU9tU3JuUxRQh1HJQAR2-HmcePT__1OFVdB7w';
  clientId: string = 'c18703414eac4e1db0e56331be34ce44';
  secretId: string = 'e33d00826e6748e9ad83769d84824363';

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    console.log(this.token);
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get(URL, { headers });
  }

  getNewRelases() {
    return this.getQuery('browse/new-releases?country=CO&limit=50').pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }

  search(termino: string) {
    return this.getQuery(`search?q=${termino}&type=track%2Cartist`).pipe(
      map((data: any) => {
        return { artists: data.artists.items, tracks: data.tracks.items };
      })
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getAlbum(id: string) {
    return this.getQuery(`albums/${id}`).pipe(
      map((albums: any) => {
        return { album: albums, tracks: albums.tracks.items };
      })
    );
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=CO`).pipe(
      map((tops: any) => {
        return tops.tracks;
      })
    );
  }
}
