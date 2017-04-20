import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { WikipediaService } from './wikipedia.service';
import { WikipediaSearchComponent } from './wikipedia-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WikipediaSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WikipediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
