import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { BankAccount } from "../../../model/bank-account";
import { Transaction } from "../../../model/transaction";
import { TransactionRepositoryService } from "../../database/transaction-repository.service";

@Component({
  selector: "app-transaction-form",
  templateUrl: "./transaction-form.component.html",
  styleUrls: ["./transaction-form.component.scss"]
})
export class TransactionFormComponent {
  public transactionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly transactionRepoService: TransactionRepositoryService
  ) {
    this.createForm();
  }

  public createForm(): void {
    this.transactionForm = this.fb.group({
      fromAccount: [2000],
      toAccount: [""],
      amount: [undefined]
    });
  }

  public onSubmit(): void {
    this.transactionRepoService.addTransaction(
      new Transaction(new BankAccount("aa", 1), 1, 1)
    );
    this.clearForm();
  }

  private clearForm(): void {
    this.transactionForm.controls.toAccount.reset();
    this.transactionForm.controls.amount.reset();
  }
}
