# Angular-Wikipedia-Search

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## References
The original article can be found at:
 
[Taking Advantage of observables in Angular2](https://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html)

[Part 2](https://blog.thoughtram.io/angular/2016/01/07/taking-advantage-of-observables-in-angular2-pt2.html)

## Changes required since the article was first published:
The article referenced above was written in January 2016 and last updated in November 2016 when Angular 2.0 was the current release.  The code was written to use SystemJS script loading.

The code in this example was written in April 2017 using Angular-cli andr Angular 4.0.2, which requires a few changes to make it work.  

In addition to the change from using SystemJS to WebPack (which requires no special attention on the part of the developer so long as the components are generated using Angular-cli's ng generate tool) there are some Angular 4.x specific changes needed, which are described below.
### AppModule
One of the import statements in file `app.module.ts` needs to change from this:
```typescript
import { JsonpModule }         from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
```
to this:
```typescript
import { FormsModule,
         ReactiveFormsModule }      from '@angular/forms';
import {HttpModule, JsonpModule}    from '@angular/http';
```

### WikipediaService

The following import must be added to file `wikipedia.service.ts:`
```typescript
import 'rxjs/add/operator/map';
```

### WikipediaSearchComponent

The following imports must be added to file `wikipedia-search.component.ts`:
```typescript
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
```

## Original Example Code for Angular 2.x

### Part 1
https://plnkr.co/edit/SIltBL

### Part 2
https://plnkr.co/edit/6nt5HH?


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
