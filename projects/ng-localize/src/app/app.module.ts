import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SomeModule } from '../module/module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
