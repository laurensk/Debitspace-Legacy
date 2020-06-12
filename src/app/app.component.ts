import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'debitspace';
  unsupported = false;

  constructor(private router: Router, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.unsupported = true;
        } else {
          this.unsupported = false;
        }
      });
  }

}
