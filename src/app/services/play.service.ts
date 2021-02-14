import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayService {
  private urlSong = new BehaviorSubject('');

  urlSong$ = this.urlSong.asObservable();

  changeUrl(url: string) {
    this.urlSong.next(url);
  }
}
