import { Inject, Injectable } from '@angular/core';
import { Transaction } from 'src/app/model/transaction';
import { IDatabaseConnetion } from './database-connection';
import { ITransactionEntity } from './i-transaction-entity';

@Injectable({
    providedIn: 'root'
})
export class TransactionRepositoryService {
    public constructor(
        @Inject('IDatabaseConnetion') private readonly database: IDatabaseConnetion,
    ) {
    }

    public addTransaction(payload: Transaction): Transaction {
        const entity = this.convertTransactionToEntity(payload);
        // Simulating success
        this.database.create(entity);
        return payload;
    }

    private convertTransactionToEntity(transaction: Transaction): ITransactionEntity {
        return {
            transaction: {
                amount: transaction.amount
            },
            date: {
                valueDate: transaction.date
            },
            merchant: {
                name: transaction.account.name,
                accountNumber: transaction.account.accountNumber.toString()
            }
        };
    }
}


