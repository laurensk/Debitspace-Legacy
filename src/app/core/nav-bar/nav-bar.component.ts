import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  routerSubscription: any;
  activeLink;

  constructor(private router: Router) {
    this.routeEvent(this.router);
  }

  ngOnInit(): void {
  }

  routeEvent(router: Router) {
    this.routerSubscription = router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.activeLink = e.url;
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }



}
