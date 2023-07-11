'use client';
import Image from 'next/image'
import {observer} from "mobx-react-lite"
import React from "react"
// components
import Navbar from "./components/Navbar"
import { Task } from './components/Task';
// store
import store from "./store"

export default observer(function Home() {
  const {state: formState, updateForm: updateFormState} = store.FormStore

  const {TaskStore:{state: taskState, taskIdGenerator, createTask}, task: {ITaskStatus}} = store
  
  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    const {input_description:description, input_status:status, input_title:title} = formState;
    createTask({_id: taskIdGenerator(), description, status: ITaskStatus.inProgress, title})
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <form onSubmit={handleFormSubmit} className="flex min-h-screen flex-col items-center justify-between p-24">
          <input name="input_description" id="input_description" placeholder={"description"} value={formState.input_description} onChange={({target: {name,value}})=> updateFormState({[name]:value})} required />
          <input name="input_status" id="input_status" placeholder={"status"} value={formState.input_status} onChange={({target: {name,value}})=> updateFormState({[name]:value})} required />
          <input name="input_title" id="input_title" placeholder={"title"} value={formState.input_title} onChange={({target: {name,value}})=> updateFormState({[name]:value})} required />
          <button type="submit">Create Task</button>
        </form>
      </div>
      <div className="w-9/12 flex h-fit flex-col items-center justify-between p-10">
        <h3>My Tasks</h3>
        {taskState.map(({_id, title})=> (
          // <div key={_id}>
          //   <h5>{title}</h5>
          // </div>
          <Task key={_id} _id={_id} title={title} />
        ))}
      </div>
    </main>
  )
})
