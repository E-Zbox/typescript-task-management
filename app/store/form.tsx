import { makeAutoObservable } from "mobx";

interface IForm {
    input_description: string,
    input_status: string,
    input_title: string,
}

interface IUpdateForm {
    input_description?: string,
    input_status?: string,
    input_title?: string
}

export class FormStore {
    state: IForm = {
        input_description: "",
        input_status: "",
        input_title: ""
    }

    constructor() {
        makeAutoObservable(this);
    }

    updateForm(updateObject: IUpdateForm) {
        const self = this;
        console.log(updateObject, this, self)
        this.state = {...self.state, ...updateObject}
    }
}