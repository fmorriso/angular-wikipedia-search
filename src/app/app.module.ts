import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule,
         ReactiveFormsModule }      from '@angular/forms';
import {HttpModule, JsonpModule}    from '@angular/http';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { WikipediaService }         from './wikipedia.service';
import { WikipediaSearchComponent } from './wikipedia-search.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WikipediaSearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WikipediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
