"use client";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import React from "react";
// components
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { Task } from "./components/Task";
// store
import store from "./store";
// styles
import { Button, Option, Select } from "./styles/shared/Form";
import { H3 } from "./styles/shared/Text";

export default observer(function Home() {
    const {
        FormStore: { state: formState, updateForm: updateFormState },
        ModalStore: { state: modalFormState },
        TaskStore: { state: taskState, taskIdGenerator, createTask },
        task: { ITaskStatus },
    } = store;

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        const {
            input_description: description,
            input_status: status,
            input_title: title,
        } = formState;
        createTask({
            _id: taskIdGenerator(),
            description,
            status: ITaskStatus.inProgress,
            title,
        });
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar />
            {modalFormState.show && (
                <Modal>
                    <form
                        onSubmit={handleFormSubmit}
                        className="w-1/2 h-3/5 flex flex-col items-start justify-between py-14 px-12 bg-slate-900 rounded box-border"
                    >
                        <div className={"w-full"}>
                            <label htmlFor="input_title">Title: </label>
                            <input
                                name="input_title"
                                id="input_title"
                                placeholder={"title"}
                                className={
                                    "w-3/5 h-10 px-2 rounded text-slate-950 capitalize ml-3"
                                }
                                value={formState.input_title}
                                onChange={({ target: { name, value } }) =>
                                    updateFormState({ [name]: value })
                                }
                                required
                            />
                        </div>
                        <div className={"w-full"}>
                            <label htmlFor="input_description">
                                Description
                            </label>
                            <input
                                name="input_description"
                                id="input_description"
                                placeholder={"description"}
                                className={
                                    "w-3/5 h-10 px-2 rounded text-slate-950 capitalize ml-3"
                                }
                                value={formState.input_description}
                                onChange={({ target: { name, value } }) =>
                                    updateFormState({ [name]: value })
                                }
                                required
                            />
                        </div>
                        {/* <input name="input_status" id="input_status" placeholder={"status"} value={formState.input_status} onChange={({target: {name,value}})=> updateFormState({[name]:value})} required /> */}
                        <div>
                            <label htmlFor="input_status">Status</label>
                            <Select
                                className={"ml-3"}
                                name="input_status"
                                id="input_status"
                                placeholder="Status"
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
                        <Button type="submit">Create Task</Button>
                    </form>
                </Modal>
            )}
            <div className="w-9/12 flex h-fit flex-col items-start justify-between p-10">
                <H3 className={""}>My Tasks</H3>
                {taskState.map(({ _id, title }) => (
                    // <div key={_id}>
                    //   <h5>{title}</h5>
                    // </div>
                    <Task key={_id} _id={_id} title={title} />
                ))}
            </div>
        </main>
    );
});
