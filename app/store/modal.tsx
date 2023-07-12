import { makeAutoObservable } from "mobx";

interface IModal {
    show: boolean;
}

interface IModalPayload {
    show?: boolean;
}

export class ModalStore {
    state: IModal = { show: false };

    constructor() {
        makeAutoObservable(this);
        this.updateState = this.updateState.bind(this);
    }

    updateState(updatedValue: IModalPayload) {
        this.state = { ...this.state, ...updatedValue };
    }
}
