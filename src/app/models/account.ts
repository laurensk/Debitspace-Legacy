import * as uuid from 'uuid';

export class IAccount {
    accId?: number;
    accUuid: string;
    accName: string;
    accNumber: string;
    accWorkspaceId: number;
    accCreationDate: Date
}

export class Account implements IAccount {
    accId? = null;
    accUuid = uuid.v4();
    accName = "";
    accNumber = "";
    accWorkspaceId = null;
    accCreationDate = new Date();
}