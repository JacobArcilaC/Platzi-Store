import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'
import {filter} from 'rxjs/operators';
declare var gtag;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ){
    const navEndEvents$ = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    );
    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-BKYNG72W3Y', {
        'page_title' : event.urlAfterRedirects,
        'page_path': event.urlAfterRedirects
      });
    })
    
  }
}
