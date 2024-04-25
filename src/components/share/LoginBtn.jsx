'use client'
import React from 'react'
import CustomBtn from './CustomBtn'
import { User } from 'lucide-react'
import { useAuthStore } from '@/store/userStore'
import Link from 'next/link'
import { useAuth } from '@/app/auth/provider'
import { usePathname } from 'next/navigation'

export default function LoginBtn() {
  const {signOut, isAuth} = useAuth()
  const path = usePathname()

  
  // console.log(path)
  return (
    <>
      {isAuth ?
        <div className='flex gap-4'>

          {!path.includes('/dashboard')&&<Link href={'/dashboard'} className='text-white bg-primary p-2 rounded-lg'>Dashboard</Link>}
          <CustomBtn style={'flex gap-2'} title={'Logout'} click={() => {
            signOut()
            window.location.href = '/'
          }} />
        </div>


        : <CustomBtn style={'flex gap-2'} title={'Sign In'} icon={<User />} isRight={true} click={() => window.location.href = '/sign-in'} />}
    </>
  )
}
