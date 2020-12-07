import { NgModule } from '@angular/core';
import { TransactionListComponent } from './list/transaction-list.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [TransactionListComponent],
  imports: [
    MatTableModule
  ],
  exports: [TransactionListComponent]
})
export class ShowTransactionsModule { }
