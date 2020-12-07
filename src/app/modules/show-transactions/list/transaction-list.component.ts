import { Component } from '@angular/core';
import { Transaction } from 'src/app/model/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {
  private readonly _transactions: Transaction[];

  public readonly columnTypes = ColumnType;
  public readonly displayedColumns: ColumnType[] = [ColumnType.Date, ColumnType.BeneficiaryName,
  ColumnType.BeneficiaryAccount, ColumnType.Amount];

  public constructor() { }

  public get transactions(): Transaction[] {
    return this._transactions;
  }

}

enum ColumnType {
  Date = 'date',
  BeneficiaryName = 'beneficiaryName',
  BeneficiaryAccount = 'beneficiaryAccount',
  Amount = 'amount'
}
