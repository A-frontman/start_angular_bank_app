import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AddTransactionModule } from "./modules/add-transaction/add-transaction.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AddTransactionModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
