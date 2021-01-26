import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppShellModule } from '@fundamental-ngx/app-shell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppShellModule.forRoot('assets/config/plugins.json')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
