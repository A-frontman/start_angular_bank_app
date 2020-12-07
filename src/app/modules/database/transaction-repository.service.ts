import { Inject, Injectable } from "@angular/core";
import { BankAccount } from "../../model/bank-account";
import { Transaction } from "../../model/transaction";
import { IDatabaseConnetion } from "./database-connection";
import { ITransactionEntity } from "./i-transaction-entity";

@Injectable({
  providedIn: "root"
})
export class TransactionRepositoryService {
  public constructor(
    @Inject("IDatabaseConnetion") private readonly database: IDatabaseConnetion
  ) {}

  public addTransaction(payload: Transaction): Transaction {
    const entity = this.convertTransactionToEntity(payload);
    // Simulating success
    this.database.create(entity);
    return payload;
  }

  public fetchTransactions(): Transaction[] {
    let entities: ITransactionEntity[] = [];

    entities = this.database.get();

    const transactions: Transaction[] = [];
    entities.forEach(entity => {
      const bankAccount = new BankAccount(
        entity.merchant.name,
        entity.merchant.accountNumber
      );

      const singleTransaction = new Transaction(
        bankAccount,
        entity.transaction.amount,
        entity.date.valueDate
      );

      transactions.push(singleTransaction);
    });

    return transactions;
  }

  private convertTransactionToEntity(
    transaction: Transaction
  ): ITransactionEntity {
    return {
      transaction: {
        amount: transaction.amount
      },
      date: {
        valueDate: transaction.date
      },
      merchant: {
        name: transaction.account.name,
        accountNumber: transaction.account.accountNumber
      }
    };
  }
}
