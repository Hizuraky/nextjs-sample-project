'use client'
import { Button, Modal } from '@/components'
import { InputField, SelectField } from '@/components'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function Page() {
  const { register } = useForm()
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <h1 className='text-xl font-bold mb-2'>Elements sample</h1>
      <div className='flex flex-col'>
        <InputField type='text' label='Input sample' registration={register('sample')} />
        <div className='mb-4' />
        <SelectField
          label='Select sample'
          registration={register('sample')}
          options={[
            { label: 'sample 1', value: 1 },
            { label: 'sample 2', value: 2 },
          ]}
        />
        <div className='mb-4' />
        <div>
          Button
          <div className='flex items-end mb-4'>
            <Button size='sm'>sm</Button>
            <Button size='md'>md</Button>
            <Button size='lg'>lg</Button>
          </div>
          <div className='flex mb-4'>
            <Button variant='danger'>danger</Button>
            <Button variant='inverse'>inverse</Button>
            <Button variant='primary'>primary</Button>
          </div>
          <Button isLoading>Loading Button</Button>
        </div>
        <div className='mb-4' />
        <div>
          Modal
          <Button onClick={() => setOpen(true)}>open modal</Button>
          <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
            <div>Modal sample</div>
          </Modal>
        </div>
      </div>
    </>
  )
}
