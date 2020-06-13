import * as uuid from 'uuid';

export class IEntry {
    entId?: number;
    entUuid: string;
    entDebitAccId: number;
    entDebitAmount: number;
    entCreditAccId: number;
    entCreditAmount: number;
    entCreationDate: Date;
}

export class Entry implements IEntry {
    entId? = null;
    entUuid = uuid.v4();
    entDebitAccId = null;
    entDebitAmount = 0;
    entCreditAccId = null;
    entCreditAmount = 0;
    entCreationDate = new Date();
}