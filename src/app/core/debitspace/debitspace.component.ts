import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-debitspace',
  templateUrl: './debitspace.component.html',
  styleUrls: ['./debitspace.component.css']
})
export class DebitspaceComponent implements OnInit {
  done = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startDebitspace();
  }

  startDebitspace() {
    this.done = true;

    if (this.router.url == "/") {
      this.router.navigateByUrl('/dashboard');
    }

  }

}
