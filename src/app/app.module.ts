import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Import Module para hacer peticiones HTTP */
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PlayerComponent } from './components/shared/player/player.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { AlbumComponent } from './components/album/album.component';
import { SafeurlPipe } from './pipes/safeurl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    PlayerComponent,
    FooterComponent,
    NoimagePipe,
    CardsComponent,
    LoaderComponent,
    NavComponent,
    AlbumComponent,
    SafeurlPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
