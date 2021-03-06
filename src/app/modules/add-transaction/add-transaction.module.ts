import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
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
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [TransactionFormComponent, ConfirmationDialogComponent],
  exports: [TransactionFormComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AddTransactionModule {}
