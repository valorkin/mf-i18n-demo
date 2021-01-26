import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxtransModule } from './ngxtrans/ngxtrans';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxtransModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
