import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Transaction } from "../../model/transaction";

@Injectable({
  providedIn: "root"
})
export class StateResolverService {
  private readonly _transactions: Transaction[] = [];
  public readonly transactionAdded$ = new BehaviorSubject<Transaction[]>([]);

  public addTransaction(payload: Transaction): void {
    this._transactions.push(payload);
    this.transactionAdded$.next(this._transactions);
  }
}
