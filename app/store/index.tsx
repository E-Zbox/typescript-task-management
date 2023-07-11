// this is the one point of every store initialization
import * as form from "./form";
import * as task from "./task";

const FormStore = new form.FormStore()

const TaskStore = new task.TaskStore();

const _ = {
    task, form, FormStore, TaskStore, 
}

export default _