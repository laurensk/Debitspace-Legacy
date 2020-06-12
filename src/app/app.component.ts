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

  done = false;
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
          this.tooSmallDevice();
        } else {
          this.startDebitspace();
        }
      });
  }

  startDebitspace() {
    this.done = true;
    this.unsupported = false;

    if (this.router.url == "/") {
      console.log(this.router.url);
      this.router.navigateByUrl('/dashboard');
    }

  }

  tooSmallDevice() {
    this.done = true;
    this.unsupported = true;
  }

}
