import { Component, OnInit } from '@angular/core';
import { WorkspacesService } from 'src/app/services/workspaces.service';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.css']
})
export class WorkspacesComponent implements OnInit {

  private _service: WorkspacesService

  constructor(service: WorkspacesService) {
    this._service = service;
  }

  ngOnInit(): void {
  }

}
