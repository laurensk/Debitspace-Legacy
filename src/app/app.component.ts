import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { initJsStore } from './services/idb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'debitspace';
  unsupported = false;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.unsupported = true;
        } else {
          this.unsupported = false;
          this.initDb();
        }
      });
  }

  async initDb() {
    try {
      await initJsStore();
      console.log("[DATABASE] Database 'Debitspace' initialized");
    } catch (error) {
      console.log(error.message);
    }
  }

}
