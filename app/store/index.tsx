// this is the one point of every store initialization
import { FormStore } from "./form";
import { TaskStore } from "./task";

export const formStore = new FormStore()

export const taskStore = new TaskStore();