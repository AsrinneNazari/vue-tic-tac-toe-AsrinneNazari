export class Player {
  id: number;
  X: boolean;
  O: boolean;

  constructor(public name: string, X: boolean, O: boolean) {
    this.id = Date.now();
    this.X = X;
    this.O = O;
  }
}
