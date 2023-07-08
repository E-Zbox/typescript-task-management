import {makeAutoObservable } from "mobx";

enum ITaskStatus {
    toDo = "To Do",
    inProgress = "In Progress",
    completed = "Completed"
}

interface ITask {
    _id: number,
    description: string,
    status: ITaskStatus
    title: string,
}

export const TASK_DESCRIPTION = "TASK_DESCRIPTION"
export const TASK_STATUS = "TASK_STATUS"
export const TASK_TITLE = "TASK_TITLE"

export type IUpdateChoice = "TASK_DESCRIPTION" | "TASK_STATUS" | "TASK_TITLE"

interface IResponse {
    data: any,
    error: string,
    success: boolean
}

export class TaskStore {
    state: ITask[] = [];

    constructor() {
        makeAutoObservable(this);
        this.state = [
            {
                _id: this.taskIdGenerator(),
                description: "Finish that EDx AWS course ASAP! Let's start spinning up resources on the cloud!",
                status: ITaskStatus.inProgress,
                title: "Learn AWS"
            },
            {
                _id: this.taskIdGenerator(),
                description: "Rehearse on the drums for at least 2 hours",
                status: ITaskStatus.inProgress,
                title: "Drums"
            },
            {
                _id: this.taskIdGenerator(),
                description: "Go through the week's content and handle the task that team members have assigned you. Remember, Milestone #9 is due Monday",
                status: ITaskStatus.toDo,
                title: "ALX Foundations | Week 9"
            },
        ]
    }

    taskIdGenerator(): number {
        return this.state.length + 1;
    }

    createTask(task: ITask): IResponse {
        let response: IResponse = {data: null, error: "", success: false}
        try {
            // check if task with task._id exists
            let taskExist: any = this.state.find(({_id})=> _id === task._id)

            // if `task` with provided `_id` was found, raise an error
            if (taskExist) {
                throw new Error("Task with provided `_id` exists. The `taskIdGenerator` is recommended for unique `_id` generation")
            }

            // task `_id` is unique, let's create task!
            this.state.push(task);
            response = {...response, data: task, success: true}
        } catch (error) {
            response = {...response, error: `${error}`,}
        } finally {
            return response;
        }
    }

    deleteTask(_id: number): IResponse {
        let response: IResponse = {data: null, error: "", success: false}
        try {
            // check if task with task._id exists
            const {data, error, success} = this.getTask(_id)

            // throw whatever error occurred in getTask method
            if (!success) {
                throw new Error(error)
            }

            // check if zero `0` task got returned (i.e null was returned) and throw an error
            if (!data) {
                throw new Error("Task with provided `_id` does not exist.")
            }

            // if we got a task, let's go ahead an delete it!
            const updatedTasks = this.state.filter(({_id})=> data._id !== _id)
            this.state = [...updatedTasks]

            response = {...response, data, success: true}
        } catch (error) {
            response = {...response, error: `${error}`}
        } finally {
            return response;
        }
    }

    getTask(_id: number): IResponse {
        let response: IResponse = {data: null, error: "", success: false}
        try {
            // check if task with task._id exists
            let task: any = this.state.find(({_id: id})=> id === _id)
            response = {...response, data: task, success: true}
        } catch (error) {
            response= {...response, error: `${error}`}
        } finally {
            return response;
        }
    }

    updateTask(_id: number, updatedValue: string, updateChoice:IUpdateChoice) {
        let response:IResponse = {data:null, error: "", success: false}
        try {
            // check if task with task._id exists
            let {data, error, success} = this.getTask(_id)
    
            // throw whatever error occurred in getTask method
            if (!success) {
                throw new Error(error)
            }
    
            // check if zero `0` task got returned (i.e null was returned) and throw an error
            if (!data) {
                throw new Error("Task with provided `_id` does not exist.")
            }
    
            // if we got a task, let's go ahead and update it!
            let updatedTasks = this.state.map(({_id})=> {
                switch(_id) {
                    case data._id:
                        switch(updateChoice) {
                            case TASK_DESCRIPTION:
                                return {...data, description: updatedValue}
                            case TASK_STATUS:
                                return {...data, status: updatedValue}
                            case TASK_TITLE:
                                return {...data, title: updatedValue}
                            default:
                                return data;
                        }
                    default:
                        return data;
                }
            })
    
            this.state = [...updatedTasks]
            response = {...response, data, success: true}
        } catch (error) {
            response = {...response, error: `${error}`}
        } finally {
            return response;
        }
    }
}