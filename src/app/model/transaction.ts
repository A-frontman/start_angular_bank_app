import { BankAccount } from './bank-account';
import { TransactionSort } from './transaction-sort.enum';

export interface Transaction {
  account: BankAccount;
  amount: number;
  date: number;
  sort: TransactionSort.Outcoming;
}
