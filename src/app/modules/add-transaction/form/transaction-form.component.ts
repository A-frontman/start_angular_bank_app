import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { BankAccount } from "../../../model/bank-account";
import { Transaction } from "../../../model/transaction";
import { TransactionRepositoryService } from "../../database/transaction-repository.service";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: "app-transaction-form",
  templateUrl: "./transaction-form.component.html",
  styleUrls: ["./transaction-form.component.scss"]
})
export class TransactionFormComponent {
  public transactionForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.createForm();
  }

  public createForm(): void {
    this.transactionForm = this.fb.group({
      fromAccount: new FormControl(2000),
      toAccountName: new FormControl(""),
      toAccount: new FormControl(undefined),
      amount: new FormControl(undefined)
    });
  }

  public onSubmit(): void {
    const toAccountNumber = this.transactionForm.value.toAccount;
    const toAccountName = this.transactionForm.value.toAccountName;
    const amount = this.transactionForm.value.amount;
    const currentDate = new Date();
    const bankAccount = new BankAccount(toAccountName, toAccountNumber);

    const transaction = new Transaction(
      bankAccount,
      amount,
      currentDate.getDate()
    );

    this.openDialog(transaction);
  }

  private clearForm(): void {
    this.transactionForm.controls.toAccountName.reset();
    this.transactionForm.controls.toAccount.reset();
    this.transactionForm.controls.amount.reset();
  }

  private openDialog(transaction: Transaction): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: transaction
    });

    dialogRef.afterClosed().subscribe(result => {
      this.clearForm();
    });
  }
}
