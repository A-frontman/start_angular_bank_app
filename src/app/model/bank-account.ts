export class BankAccount {
    public constructor(
        private readonly _name: string,
        private readonly _accountNumber: string,
    ) { }

    public get name(): string {
        return this._name;
    }

    public get accountNumber(): string {
        return this._accountNumber;
    }
}