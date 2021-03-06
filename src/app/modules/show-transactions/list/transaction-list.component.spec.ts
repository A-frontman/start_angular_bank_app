import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { Subject } from 'rxjs';
import { TransactionRepositoryService } from '../../database/transaction-repository.service';
import { StateResolverService } from '../../state-resolver/state-resolver.service';
import { TransactionListComponent } from './transaction-list.component';

fdescribe('TransactionListComponent - create own mock', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  let transactionRepositoryServiceMock: TransactionRepositoryServiceMock;

  beforeEach(async () => {
    transactionRepositoryServiceMock = new TransactionRepositoryServiceMock();
    spyOn(transactionRepositoryServiceMock, 'fetchTransactions');

    await TestBed.configureTestingModule({
      providers: [
        { provide: TransactionRepositoryService, useValue: transactionRepositoryServiceMock }
      ],
      declarations: [TransactionListComponent]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TransactionListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(transactionRepositoryServiceMock.fetchTransactions).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });
});

class TransactionRepositoryServiceMock {
  public fetchTransactions(): void { };
}

fdescribe('TransactionListComponent - create spy object', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  let transactionRepositoryServiceSpy: TransactionRepositoryService;
  let stateResolverServiceSpy: StateResolverService;

  let transactionAddedMock$ = new Subject();

  beforeEach(async () => {
    transactionRepositoryServiceSpy = jasmine.createSpyObj('TransactionRepositoryService', ['fetchTransactions']);
    stateResolverServiceSpy = jasmine.createSpyObj('StateResolverService', [], { transactionAdded$: transactionAddedMock$ });

    await TestBed.configureTestingModule({
      imports: [MatTableModule],    
      providers: [
        { provide: TransactionRepositoryService, useValue: transactionRepositoryServiceSpy },
        { provide: StateResolverService, useValue: stateResolverServiceSpy }
      ],
      declarations: [TransactionListComponent]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TransactionListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(transactionRepositoryServiceSpy.fetchTransactions).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should display current transaction list', () => {
    transactionAddedMock$.next([{ account: { name: 'Cokolwiek' } }]);

    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    fixture.detectChanges();

    let row1 = tableRows[1];

    expect(row1.cells[0].innerHTML).toBe(' Cokolwiek ');
  });
});