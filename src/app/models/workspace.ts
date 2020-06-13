import * as uuid from 'uuid';

export class IWorkspace {
    worId?: number;
    worUuid: string;
    worName: string;
    worNotes: string;
    worCreationDate: Date;
}

export class Workspace implements IWorkspace {
    worId? = null;
    worUuid = uuid.v4();
    worName = "";
    worNotes = "";
    worCreationDate = new Date();
}