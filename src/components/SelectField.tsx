import clsx from 'clsx'
import FieldWrapper, {
  UseFormRegister,
  FieldWrapperPassThroughProps,
} from '@/lib/react-hook-form/wrapper'
import { FC } from 'react'

type Option = {
  label: React.ReactNode
  value: string | number | string[]
}

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[]
  className?: string
  defaultValue?: string
  placeholder?: string
  registration: Partial<UseFormRegister>
}

const SelectField: FC<SelectFieldProps> = (props) => {
  const { label, options, error, className, defaultValue, registration, placeholder } = props
  return (
    <FieldWrapper label={label} error={error}>
      <select
        placeholder={placeholder}
        name='location'
        className={clsx(
          'mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md',
          className
        )}
        defaultValue={defaultValue}
        {...registration}
      >
        {options.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  )
}

export default SelectField
