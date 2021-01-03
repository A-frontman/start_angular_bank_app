import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Transaction } from "../../../model/transaction";
import { TransactionRepositoryService } from "../../database/transaction-repository.service";

@Component({
  selector: "app-confirmation-dialog",
  templateUrl: "./confirmation-dialog.component.html"
})
export class ConfirmationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Transaction,
    private readonly transactionRepoService: TransactionRepositoryService
  ) {}

  public confirm(): void {
    this.transactionRepoService.addTransaction(this.data);
  }
}
