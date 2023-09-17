import React from 'react'
import { NavigationMenuProps } from './NevigayionMenu.props'
import styles from '@/styles/NavigationMenu.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavigationMenu = ({...props}: NavigationMenuProps): JSX.Element => {
  const router = useRouter();
  const isActive = (pathname: string) => {
    return router.pathname === pathname ? 'active' : '';
  };
  return (
    <nav className="w-full p-3 bg-black text-white flex justify-center uppercase">
      <span className='inline-block mr-5'>
        <Link href="/" className={isActive('/')}>Home</Link>
      </span>
      <span>
        <Link href="/notes" className={isActive('/notes')}>Notes</Link>
      </span>
    </nav>
  )
}

export default NavigationMenu
