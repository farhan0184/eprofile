'use client'
import React from 'react'
import { ComingSoon, DashboardHeader } from '../_components'
import { Ellipsis } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Frame } from '@/assets/images'
const tabList = [
  {
    id: 1,
    title: 'Active',
  },
  {
    id: 2,
    title: 'Close',
  },
  

]

export default function SupportAndReportPage() {
  const [value, setValue] = React.useState('Active')
  return (
    // <ComingSoon/>
    <div className="container">
      
      <DashboardHeader title={'Support'} btnTitle={'New Support'} />
      <div className='mt-10'>
        <div className='flex '>
          {tabList.map(item => <div onClick={() => setValue(item.title)} key={item.id} className={`w-[80px] cursor-pointer  py-2 ${item.title === value && 'border-b-[1px] border-primary text-primary'}`}>
            <p className='text-[18px] font-semibold text-center'>{item.title}</p>
          </div>)}



        </div>
        <div className='mt-5'>
          {value === 'Active' && <div className='w-full p-3 bg-pLight rounded-lg bCenter'>
            <div className='bCenter w-full'>
              <div className='flex w-[75%] gap-2'>
                <div>
                  <Image src={Frame} alt='frame' className='w-[80px] h-[80px] rounded-lg' />
                </div>
                <div className='space-y-4'>
                  <p>I will be full stack web and software developer build applications</p>
                </div>
              </div>
              <div className="w-[25%]  bCenter ">
                <div className='bCenter w-[80%]'>
                  <div>
                    <p className={`py-2 bg-green-400  text-white text-md w-[140px] center rounded-full `}>Active</p>
                  </div>
                  <Switch id="airplane-mode" className='data-[state=checked]:bg-green-400 data-[state=unchecked]:bg-gray-400'/>
                </div>
                <Button className="p-0 bg-transparent hover:bg-gray-200 h-min w-min text-md font-bold text-black ">
                  <Ellipsis />
                </Button>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}
