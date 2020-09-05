import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { DudeComponent } from './dude/dude.component';
import { BottomComponent } from './bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    DudeComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
