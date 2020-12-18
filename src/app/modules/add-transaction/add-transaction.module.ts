import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import { TransactionFormComponent } from "./form/transaction-form.component";

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [TransactionFormComponent, ConfirmationDialogComponent],
  exports: [TransactionFormComponent]
})
export class AddTransactionModule {}
