import {makeAutoObservable } from "mobx";


class MyStore {
    count  = 0;

    constructor() {
        makeAutoObservable(this);
    }

    decrementCount() {
        this.count--;
    }

    incrementCount() {
        this.count++;
    }

    reset() {
        this.count = 0;
    }
}

const myStore = new MyStore();

export default myStore;