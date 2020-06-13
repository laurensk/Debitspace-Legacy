import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from 'src/app/services/workspace.service';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.css']
})
export class WorkspacesComponent implements OnInit {

  private _service: WorkspaceService

  constructor(service: WorkspaceService) {
    this._service = service;
  }

  ngOnInit(): void {
  }

}
