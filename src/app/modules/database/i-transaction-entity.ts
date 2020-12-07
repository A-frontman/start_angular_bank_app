export interface ITransactionEntity {
  transaction: {
    amount: number;
  };
  date: {
    valueDate: number;
  };
  merchant: {
    name: string;
    accountNumber: string;
  };
}
