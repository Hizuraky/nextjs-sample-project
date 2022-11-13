import { FC, ReactElement, ButtonHTMLAttributes } from 'react'
import { Spinner } from '@/components'
import clsx from 'clsx'

const variants = {
  primary: 'bg-blue-500 text-white active:bg-blue-600',
  inverse: 'bg-white text-blue-600 active:bg-gray-100',
  danger: 'bg-red-500 text-white active:bg-red-600',
}

const sizes = {
  sm: 'text-sm w-20 h-6 font-semibold',
  md: 'text-md w-28 h-8',
  lg: 'text-lg w-40 h-10',
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

const CommonButton: FC<ButtonProps> = ({
  type = 'button',
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsx(
        'text-white font-bold uppercase text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center justify-center',
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
          {props.children}
          {endIcon}
        </>
      )}
    </button>
  )
}

export default CommonButton
