'use client'
import { Button } from '@/components'
import Form from '@/lib/react-hook-form/form'
import { InputField, SelectField } from '@/components'
import { schema } from '@/lib/zod'

type TestValues = {
  email: string
  password: string
  role: string
}

const roleOptions = [
  { label: 'admin', value: 'admin' },
  { label: 'user', value: 'user' },
]

export default function Page() {
  return (
    <Form<TestValues, typeof schema>
      onSubmit={async (values) => console.log(values)}
      schema={schema}
      options={{
        shouldUnregister: true,
      }}
    >
      {({ register, formState }) => (
        <>
          <InputField
            type='text'
            label='Email'
            error={formState.errors['email']}
            registration={register('email')}
          />
          <InputField
            type='password'
            label='Password'
            error={formState.errors['password']}
            registration={register('password')}
          />
          <SelectField
            label='Role'
            error={formState.errors['role']}
            registration={register('role')}
            options={roleOptions}
          />
          <div>
            <Button type='submit' className='w-full'>
              Register
            </Button>
          </div>
        </>
      )}
    </Form>
  )
}
