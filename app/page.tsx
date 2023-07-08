'use client';
import Image from 'next/image'
import {observer} from "mobx-react-lite"
import React from "react"
// store
import {formStore, taskStore} from "./store"

export default observer(function Home() {
  const {state: formState, updateForm: updateFormState} = formStore

  const {state: taskState} = taskStore
  
  const handleFormSubmit = (e: any) => {
    e.preventDefault()
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <form onSubmit={handleFormSubmit} className="flex min-h-screen flex-col items-center justify-between p-24">
          <input name="input_description" id="input_description" placeholder={"description"} value={formState.input_description} onChange={({target: {name,value}})=> console.log({[name]:value})} />
          <input name="input_status" id="input_status" placeholder={"status"} value={formState.input_status} onChange={({target: {name,value}})=> updateFormState({[name]:value})} />
          <input name="input_title" id="input_title" placeholder={"title"} value={formState.input_title} onChange={({target: {name,value}})=> updateFormState({[name]:value})} />
          <button type="submit">Create Task</button>
        </form>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h3>My Tasks</h3>
        {taskState.map(({_id, title})=> (
          <div key={_id}>
            <h5>{title}</h5>
          </div>
        ))}
      </div>
    </main>
  )
})
