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
      className={`rounded-lg max-w-[80vw] flex min-h-fit px-4 py-2 text-black ${color}`}
    >
      <span className='max-w-full break-words'>{message}</span>
    </div>
  )
}
