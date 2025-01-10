'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { Globe } from '../components/Globe'
export const Chat = () => {
  const [message, setMessage] = useState<string>('')

  const [messages, setMessages] = useState<string[]>([])

  useEffect(() => {}, [messages])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (message === '') return
    setMessages([...messages, message])
    setMessage('')
  }

  return (
    <div className='flex flex-col justify-between h-screen'>
      <div className='my-10 px-10 sm:px-20 overflow-hidden w-full h-full'>
        {messages.map((message, index) =>
          message.split('')[0] === '!' ? (
            <div
              key={index}
              className='flex gap-5 my-5 justify-self-start h-fit'
            >
              <Globe message={message} color='bg-green-600 h-fit' />
            </div>
          ) : (
            <div key={index} className='flex gap-5 my-5 justify-self-end'>
              <Globe message={message} color='bg-green-300' />
            </div>
          )
        )}
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className='my-10 flex gap-5 mx-0 justify-center'
      >
        <input
          className='py-2 rounded px-4 text-black w-[70vw]'
          type='text'
          value={message ?? ''}
          placeholder='Type your message here...'
          onChange={(e) => handleChange(e)}
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          Send
        </button>
      </form>
    </div>
  )
}