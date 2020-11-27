export class BankAccount {
    public constructor(
        private readonly _name: string,
        private readonly _accountNumber: number,
    ) { }

    public get name(): string {
        return this._name;
    }

    public get accountNumber(): number {
        return this._accountNumber;
    }
}