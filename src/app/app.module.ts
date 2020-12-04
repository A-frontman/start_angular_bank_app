import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AddTransactionModule } from "./modules/add-transaction/add-transaction.module";
import { DatabaseModule } from "./modules/database/database.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AddTransactionModule, DatabaseModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
