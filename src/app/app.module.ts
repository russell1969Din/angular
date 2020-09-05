import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Natiahmutie modulu pre prácu 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//Natiahnutie animacneho modulu
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DudeComponent } from './dude/dude.component';

import { HeadComponent } from './head/head.component';
import { BottomComponent } from './bottom/bottom.component';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [
    AppComponent,
    DudeComponent,
    HeadComponent,
    BottomComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

}
