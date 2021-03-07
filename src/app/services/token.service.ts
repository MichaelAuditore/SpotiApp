import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  clientId: string = 'c18703414eac4e1db0e56331be34ce44';
  secretId: string = 'e33d00826e6748e9ad83769d84824363';

  constructor(private http: HttpClient) { }

  getToken() {
    return this.http.get(`https://m-spotimike-token.herokuapp.com/spotify/${this.clientId}/${this.secretId}`)
  }
}
