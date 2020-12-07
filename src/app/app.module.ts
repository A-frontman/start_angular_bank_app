import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AddTransactionModule } from "./modules/add-transaction/add-transaction.module";
import { DatabaseModule } from "./modules/database/database.module";
import { ShowTransactionsModule } from './modules/show-transactions/show-transactions.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AddTransactionModule,
    DatabaseModule,
    ShowTransactionsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
