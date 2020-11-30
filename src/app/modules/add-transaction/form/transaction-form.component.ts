import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent {
  public transactionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  public createForm(): void {
    this.transactionForm = this.fb.group({
      fromAccount: [2000],
      toAccount: [''],
      amount: [undefined]
    });
  }

  public onSubmit(): void {
    this.clearForm();
  }

  private clearForm(): void {
    this.transactionForm.controls.toAccount.reset();
    this.transactionForm.controls.amount.reset();
  }
}
