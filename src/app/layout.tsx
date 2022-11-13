'use client'
import '@/styles/globals.css'
import { FC, PropsWithChildren } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname()

  const pages = [
    { label: 'Top', link: '/' },
    { label: 'Form', link: '/form' },
    { label: 'Elements', link: '/elements' },
  ]
  return (
    <html lang='ja'>
      <head>
        <title>Next13</title>
      </head>
      <body>
        <div className='flex flex-col p-2 bg-blue-200'>
          <h1>Sample</h1>
          <div className='flex'>
            {pages.map(({ label, link }) => (
              <Link
                href={link}
                key={label}
                className={clsx(
                  'rounded-md p-1 mr-2 w-24 text-center text-sm',
                  pathname === link ? 'bg-blue-300 shadow-inner' : 'bg-blue-100 shadow-md'
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className='p-2'>{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
