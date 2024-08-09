import React from 'react'
interface AuthHeaderProps {
    title: string
    label: string
}

const AuthHeader = ( {title, label}: AuthHeaderProps) => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-y-4'>
      <h1 className='text-3xl font-semibold'>{title}</h1>
      <p className='text-muted-foreground text-sm'>{label}</p>
    </div>
  )
}

export default AuthHeader
