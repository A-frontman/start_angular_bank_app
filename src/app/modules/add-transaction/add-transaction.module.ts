import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from './form-error/form-error.component';
import { TransactionFormComponent } from './form/transaction-form.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [TransactionFormComponent, FormErrorComponent],
  exports: [TransactionFormComponent]
})
export class AddTransactionModule {}
