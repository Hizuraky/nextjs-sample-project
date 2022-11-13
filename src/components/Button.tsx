import { FC, ReactElement, ButtonHTMLAttributes } from 'react'
import { Spinner } from '@/components'
import clsx from 'clsx'

const variants = {
  primary: 'bg-blue-500 text-white active:bg-blue-600',
  inverse: 'bg-white text-blue-600 active:bg-gray-100',
  danger: 'bg-red-500 text-white active:bg-red-600',
}

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
}

type IconProps =
  | { startIcon: ReactElement; endIcon?: never }
  | { endIcon: ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined }

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  IconProps & {
    variant?: keyof typeof variants
    size?: keyof typeof sizes
    isLoading?: boolean
  }

const CommonButton: FC<ButtonProps> = (
  {
    type = 'button',
    className = '',
    variant = 'primary',
    size = 'md',
    isLoading = false,
    startIcon,
    endIcon,
    ...props
  },
  ref
) => {
  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        'text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <Spinner size='sm' className='text-current' />
      ) : (
        <>
          {startIcon}
          <span>{props.children}</span>
          {endIcon}
        </>
      )}
    </button>
  )
}

export default CommonButton
