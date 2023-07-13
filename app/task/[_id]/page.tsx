"use client";
import { FormEvent, useEffect } from "react";
// components
import Navbar from "../../components/Navbar";
// store
import { FormStore } from "@/app/store/form";
import store from "@/app/store";
// styles
import { MainApp } from "../../styles/App";
import { Button, Option, Select, TextInput } from "@/app/styles/shared/Form";

interface PropTypes {
    params: {
        _id: string;
    };
    searchParams: object;
}

const DetailedTask = ({ params }: PropTypes) => {
    const _id = Number(params._id);
    const { state: formState, updateForm: updateFormState } = new FormStore();

    const {
        task: { ITaskStatus, TASK_DESCRIPTION, TASK_STATUS, TASK_TITLE },
        TaskStore: { getTask, state: taskState, updateTask },
    } = store;

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        const {
            input_description: _description,
            input_status,
            input_title: _title,
        } = formState;

        let _status = ITaskStatus.toDo;
        switch (input_status) {
            case "To Do":
                _status = ITaskStatus.toDo;
            case "In Progress":
                _status = ITaskStatus.inProgress;
            case "Completed":
                _status = ITaskStatus.completed;
            default:
                _status = ITaskStatus.toDo;
        }

        // get previous state and compare it with current state and perform necessary update
        const { data } = getTask(_id);

        if (_description !== data.description) {
            updateTask(_id, _description, TASK_DESCRIPTION);
        }

        if (_status !== data.status) {
            updateTask(_id, _status, TASK_STATUS);
        }

        if (_title !== data.title) {
            updateTask(_id, _title, TASK_TITLE);
        }
    };

    useEffect(() => {
        console.log(formState, _id);
        if (formState.input_description === "") {
            const {
                data: {
                    description: input_description,
                    status: input_status,
                    title: input_title,
                },
                error,
                success,
            } = getTask(_id);
            console.log(
                { input_description, input_status, input_title },
                success,
                error
            );
            if (!success) {
                throw new Error(error);
            }
            console.log("updatedForm ✅");
            updateFormState({ input_description, input_status, input_title });
        }
    }, [_id, formState, getTask, updateFormState]);

    useEffect(() => {
        console.log(formState);
    }, [formState]);

    return (
        <MainApp className="h-screen justify-start border-2 border-red-900">
            <Navbar />
            <main className="relative w-7/12 h-4/5 flex flex-col place-self-center justify-around items-start rounded before:content-[''] before:absolute before:w-full before:h-full before:left-0 before: top-0  before:bg-slate-800 before:rounded before:opacity-75 before:z-0">
                <form
                    onSubmit={handleFormSubmit}
                    className="w-4/5 h-4/5 flex flex-col items-start justify-between py-14 px-12 bg-transparent z-10"
                >
                    <p>{formState.input_description}</p>
                    <p>{formState.input_status}</p>
                    <p>{formState.input_title}</p>
                    <div className={"w-full"}>
                        <label htmlFor="input_title">Title: </label>
                        <TextInput
                            name="input_title"
                            id="input_title"
                            placeholder={"Title"}
                            value={formState.input_title}
                            onChange={({ target: { name, value } }) =>
                                updateFormState({ [name]: value })
                            }
                            required
                        />
                    </div>
                    <div className={"w-full"}>
                        <label htmlFor="input_description">Description</label>
                        <TextInput
                            name="input_description"
                            id="input_description"
                            placeholder={"Description"}
                            // value={formState.input_description}
                            value={"I love tech"}
                            onChange={({ target: { name, value } }) =>
                                updateFormState({ [name]: value })
                            }
                            required
                        />
                    </div>
                    {/* <TextInput name="input_status" id="input_status" placeholder={"status"} value={formState.input_status} onChange={({target: {name,value}})=> updateFormState({[name]:value})} required /> */}
                    <div>
                        <label htmlFor="input_status">Status</label>
                        <Select
                            className={"ml-3"}
                            name="input_status"
                            id="input_status"
                            placeholder="Status"
                            onChange={({ target: { name, value } }) =>
                                updateFormState({ [name]: value })
                            }
                        >
                            <Option value={ITaskStatus.completed}>
                                {ITaskStatus.completed}
                            </Option>
                            <Option value={ITaskStatus.inProgress}>
                                {ITaskStatus.inProgress}
                            </Option>
                            <Option value={ITaskStatus.toDo}>
                                {ITaskStatus.toDo}
                            </Option>
                        </Select>
                    </div>
                    <Button type="submit">Update Task</Button>
                </form>
            </main>
        </MainApp>
    );
};

export default DetailedTask;
