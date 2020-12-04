import { NgModule } from '@angular/core';
import { DatabaseConnetion } from './database-connection';

@NgModule({
  providers: [
    { provide: 'IDatabaseConnetion', useClass: DatabaseConnetion },
  ]
})
export class DatabaseModule { }
