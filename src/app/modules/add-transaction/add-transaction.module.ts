import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TransactionFormComponent } from "./form/transaction-form.component";

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [TransactionFormComponent],
  exports: [TransactionFormComponent]
})
export class AddTransactionModule {}
