'use client';
import Image from 'next/image'
import {observer} from "mobx-react-lite"
import React from "react"
// store
import myStore from "./store"

export default observer(function Home() {
  const handleIncrement = ()=> myStore.incrementCount();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <p>Not trying to get ahead of myself but, I love NEXT.js</p>
        <p>Count: {myStore.count}</p>
        <button onClick={handleIncrement}>Count +</button>
      </div>
    </main>
  )
})
