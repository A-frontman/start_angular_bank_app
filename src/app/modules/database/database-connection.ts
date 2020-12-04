import { ITransactionEntity } from "./i-transaction-entity";
import * as transactionsTable from "./mock/#start_angular_database_mock.json";

export interface IDatabaseConnetion {
  get(): ITransactionEntity[];
  create(transaction: ITransactionEntity): boolean;
}

export class DatabaseConnetion implements IDatabaseConnetion {
  public get(): ITransactionEntity[] {
    return transactionsTable.data;
  }

  public create(transaction: ITransactionEntity): boolean {
    // Add Transaction to transactionsTable
    return true;
  }
}
