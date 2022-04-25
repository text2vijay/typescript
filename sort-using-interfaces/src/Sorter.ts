interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(lefIndex: number, rightIndex: number): void;
}

export class Sorter {
  collecton: Sortable;
  constructor(collecton: Sortable) {
    this.collecton = collecton;
  }
  sort(): void {
    const { length } = this.collecton;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collecton.compare(j, j + 1)) {
          this.collecton.swap(j, j + 1);
        }
      }
    }
  }
}
