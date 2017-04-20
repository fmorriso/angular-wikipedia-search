import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { FormControl }       from '@angular/forms';

import { WikipediaService }  from './wikipedia.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-wikipedia-search',
  templateUrl: './wikipedia-search.component.html',
  styleUrls: ['./wikipedia-search.component.css']
})
export class WikipediaSearchComponent implements OnInit {

  items: Observable<Array<string>>;
  term = new FormControl();

  constructor(private wikipediaService: WikipediaService) {}

  ngOnInit() {
    this.items = this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.wikipediaService.search(term));
  }

}
