'use client'
import { Button, Modal } from '@/components'
import { useState } from 'react'

export default function Page() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <h1>Hello, Next.js!</h1>
      {/* <Button onClick={() => setOpen(true)}>test</Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <div className='bg-white w-52 h-52'>test</div>
      </Modal> */}
    </>
  )
}
