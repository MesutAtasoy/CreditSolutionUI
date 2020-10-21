import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonalService} from '../services/personal-service';
import {HttpClientModule} from '@angular/common/http';
import {PersonalComponent} from './personal/personal.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        PersonalComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
    exports: [],
    providers: [PersonalService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
