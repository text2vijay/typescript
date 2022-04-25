"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collecton) {
        this.collecton = collecton;
    }
    sort() {
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
exports.Sorter = Sorter;
