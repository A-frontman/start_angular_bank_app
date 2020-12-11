import { Component } from "@angular/core";
import { Transaction } from "../../../model/transaction";
import { TransactionRepositoryService } from "../../database/transaction-repository.service";
import { StateResolverService } from '../../state-resolver/state-resolver.service';

@Component({
  selector: "app-transaction-list",
  templateUrl: "./transaction-list.component.html",
  styleUrls: ["./transaction-list.component.scss"]
})
export class TransactionListComponent {
  private _transactions: Transaction[];

  public readonly columnTypes = ColumnType;
  public readonly displayedColumns: ColumnType[] = [ColumnType.BeneficiaryName];

  public constructor(transactionRepoService: TransactionRepositoryService,
    private readonly stateResolverService: StateResolverService) {
    this._transactions = transactionRepoService.fetchTransactions();
    
    this.stateResolverService.transactionAdded$.subscribe((updatedTransactionList) => {
      this._transactions = updatedTransactionList;
    });
  }

  public get transactions(): Transaction[] {
    return this._transactions;
  }
}

enum ColumnType {
  BeneficiaryName = "beneficiaryName"
}
