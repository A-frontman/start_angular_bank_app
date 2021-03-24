import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionRepositoryService } from '../../database/transaction-repository.service';
import { TransactionListComponent } from './transaction-list.component';

class TransactionRepositoryServiceMock {
  public fetchTransactions(): void { };
}

fdescribe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  let transactionRepositoryServiceMock: TransactionRepositoryServiceMock;
  transactionRepositoryServiceMock = new TransactionRepositoryServiceMock();

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      providers: [
        { provide: TransactionRepositoryService, useValue: transactionRepositoryServiceMock }
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
