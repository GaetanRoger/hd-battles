import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { BattleModule } from './battle/battle.module';
import { HomeComponent } from './home/home.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CharacterModule } from './character/character.module';

const LOCALE = 'fr';

registerLocaleData(localeFr, LOCALE);

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    BattleModule,
    CharacterModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: LOCALE }],
  bootstrap: [AppComponent]
})
export class AppModule { }
