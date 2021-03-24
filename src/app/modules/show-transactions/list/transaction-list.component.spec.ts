import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { TransactionRepositoryService } from '../../database/transaction-repository.service';
import { StateResolverService } from '../../state-resolver/state-resolver.service';
import { TransactionListComponent } from './transaction-list.component';

class TransactionRepositoryServiceMock {
  public fetchTransactions(): void { };
}

let transactionAddedMock$: Subject<any>;
class StateResolverServiceMock {
  public get transactionAdded$(): Subject<any> {
    return transactionAddedMock$;
  }
}

fdescribe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  let transactionRepositoryServiceMock: TransactionRepositoryServiceMock;
  let stateResolverServiceMock: StateResolverServiceMock;

  beforeEach(async () => {
    transactionRepositoryServiceMock = new TransactionRepositoryServiceMock();
    stateResolverServiceMock = new StateResolverServiceMock();

    spyOn(transactionRepositoryServiceMock, 'fetchTransactions');

    await TestBed.configureTestingModule({
      providers: [
        { provide: TransactionRepositoryService, useValue: transactionRepositoryServiceMock },
        { provide: StateResolverService, useValue: stateResolverServiceMock }
      ],
      declarations: [ TransactionListComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch transaction list when is constructed', () => {
    expect(transactionRepositoryServiceMock.fetchTransactions).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should display current transaction list', () => {
    
  });
});
