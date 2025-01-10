import React from 'react'

export const Globe = ({
  message,
  color,
}: {
  message: string
  color: string
}) => {
  return (
    <div
      className={`h-fit w-fit max-w-[90vw] flex flex-wrap overflow-hidden text-black px-10 py-2 rounded-lg text-right ${color}`}
    >
      <p>{message}</p>
    </div>
  )
}
