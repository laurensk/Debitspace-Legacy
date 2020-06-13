import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class WorkspaceService extends BaseService {
  
  tableName = 'Workspace';

  getWorkspaces() {
    return this.connection.select<any>({
      from: this.tableName
    });
  }

}