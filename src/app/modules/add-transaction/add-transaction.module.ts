import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import { TransactionFormComponent } from "./form/transaction-form.component";

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  declarations: [TransactionFormComponent, ConfirmationDialogComponent],
  exports: [TransactionFormComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AddTransactionModule {}
