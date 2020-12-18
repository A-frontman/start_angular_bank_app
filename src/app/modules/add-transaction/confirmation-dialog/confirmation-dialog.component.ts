import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { Transaction } from 'src/app/model/transaction';
import { AddTransaction } from 'src/app/modules/state-resolver';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transaction,
  private store: Store,
  private userService: UserService) { }

  public confirm(): void {
    this.userService.updateSaldo(this.data.amount);
    this.store.dispatch(new AddTransaction(this.data))
  }

  public get isValid(): boolean {
    return this.userService.validateSaldo(this.data.amount);
  }

}
