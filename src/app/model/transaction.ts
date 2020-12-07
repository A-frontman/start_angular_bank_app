import { BankAccount } from "./bank-account";
import { TransactionSort } from "./transaction-sort.enum";

export class Transaction {
  public constructor(
    private readonly _account: BankAccount,
    private readonly _amount: number,
    private readonly _date: number,
    private readonly _sort = TransactionSort.Outcoming
  ) {}

  public get account(): BankAccount {
    return this._account;
  }

  public get amount(): number {
    let amount = this._amount;
    if (this._sort === TransactionSort.Outcoming) {
      amount = 0 - this._amount;
    }
    return amount;
  }

  public get date(): number {
    return this._date;
  }
}
