// this is the one point of every store initialization
import * as form from "./form";
import * as modal from "./modal";
import * as task from "./task";

const FormStore = new form.FormStore();

const ModalStore = new modal.ModalStore();

const TaskStore = new task.TaskStore();

const _ = {
    task,
    form,
    FormStore,
    ModalStore,
    TaskStore,
};

export default _;
