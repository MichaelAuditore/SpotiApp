import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private _location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this._location.back();
  }

  goForward() {
    this._location.forward();
  }
}
