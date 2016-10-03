import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LocalizationModule, LocaleModule} from "angular2localization";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LocaleModule.forRoot(), // New instance of LocaleService.
    LocalizationModule.forRoot() // New instance of LocalizationService.
  ],
  providers: [Title],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
