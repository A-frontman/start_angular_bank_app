import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Transaction } from 'src/app/model/transaction';

@Injectable({
  providedIn: 'root'
})
export class StateResolverService {
  public readonly stateUpdated$ = new Subject<Transaction>();
}
