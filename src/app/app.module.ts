import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {NgxGalleryModule} from '@kolkov/ngx-gallery';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxGalleryModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
