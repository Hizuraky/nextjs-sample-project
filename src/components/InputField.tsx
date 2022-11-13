import clsx from 'clsx'
import FieldWrapper, {
  UseFormRegister,
  FieldWrapperPassThroughProps,
} from '@/lib/react-hook-form/wrapper'
import { FC } from 'react'

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password'
  className?: string
  registration: Partial<UseFormRegister>
}

const InputField: FC<InputFieldProps> = (props) => {
  const { type = 'text', label, className, registration, error } = props
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={clsx(
          'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  )
}

export default InputField
