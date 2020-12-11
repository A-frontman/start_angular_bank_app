import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Transaction } from 'src/app/model/transaction';

@Injectable({
  providedIn: 'root'
})
export class StateResolverService {
  private readonly _transactions: Transaction[];
  public readonly transactionAdded$ = new Subject<Transaction[]>();

  public addTransaction(payload: Transaction): void {
    this._transactions.push(payload);
    this.transactionAdded$.next(this._transactions);
  }

}
