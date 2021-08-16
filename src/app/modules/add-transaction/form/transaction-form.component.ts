import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { AccountNumber } from '../../../model/bank-account';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent {
  public transactionForm: FormGroup;
  private formSubmitAttempted = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  public createForm(): void {
    this.transactionForm = this.fb.group({
      fromAccount: new FormControl(
        AccountNumber.from('10203025478951425698523658').valueOf,
        [
          Validators.required,
          Validators.maxLength(26),
          Validators.minLength(26)
        ]
      ),
      toAccount: new FormControl('', [
        Validators.required,
        Validators.maxLength(26),
        Validators.minLength(26)
      ]),
      amount: new FormControl(undefined, [
        Validators.required,
        onlyPositiveValidator()
      ])
    });
  }

  public onSubmit(): void {
    this.formSubmitAttempted = true;
    if (this.transactionForm.valid) {
      this.formSubmitAttempted = false;
      this.clearForm();
    }
  }

  isControlValid(control: string) {
    return !this.transactionForm.get(control).valid && this.formSubmitAttempted;
  }

  private clearForm(): void {
    this.transactionForm.controls.toAccount.reset();
    this.transactionForm.controls.amount.reset();
  }
}

export function onlyPositiveValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value < 0
      ? { onlyPositive: 'Amount cannot be negative!' }
      : null;
  };
}
