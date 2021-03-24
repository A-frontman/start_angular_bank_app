import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { TransactionRepositoryService } from '../../database/transaction-repository.service';
import { StateResolverService } from '../../state-resolver/state-resolver.service';
import { TransactionListComponent } from './transaction-list.component';


fdescribe('TransactionListComponent', () => {
  class TransactionRepositoryServiceMock {
    public fetchTransactions(): void { };
  }
  class StateResolverServiceMock {
    public transactionAdded$ = new Subject();
  }

  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  let transactionRepositoryServiceMock: TransactionRepositoryServiceMock;
  transactionRepositoryServiceMock = new TransactionRepositoryServiceMock();

  let stateResolverServiceMock: StateResolverServiceMock;
  stateResolverServiceMock = new StateResolverServiceMock();

  beforeEach(async () => {
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
