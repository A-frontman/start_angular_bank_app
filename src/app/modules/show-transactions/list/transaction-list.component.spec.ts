import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { Subject } from 'rxjs';
import { TransactionRepositoryService } from '../../database/transaction-repository.service';
import { StateResolverService } from '../../state-resolver/state-resolver.service';
import { TransactionListComponent } from './transaction-list.component';

class TransactionRepositoryServiceMock {
  public fetchTransactions(): void { };
}

let transactionAddedMock$ = new Subject;
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
    spyOn(transactionRepositoryServiceMock, 'fetchTransactions');

    await TestBed.configureTestingModule({
      imports: [MatTableModule],
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
    stateResolverServiceMock.transactionAdded$.next([{ account: { name: 'Cokolwiek' } }]);

    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    fixture.detectChanges();

    let row1 = tableRows[1];

    expect(row1.cells[0].innerHTML).toBe(' Cokolwiek ');
  });
});
