'use client'
import SideBar from '@/app/dashboard/_components/share/SideBar'
import LoaderPage from '@/components/share/LoaderPage'

import { useCompanyStore, useProfileStore } from '@/store/userStore'
import React, { Suspense, useEffect } from 'react'

export default function DashboardLayout({ child }) {
    const { profileData, getProfile } = useProfileStore()
    const {getCompanies} = useCompanyStore()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        getProfile(user?.id)
    }, [])
    useEffect(() => {
        getCompanies()
    },[])
    return (
        <div className='flex ' suppressHydrationWarning={true}>
            <SideBar />
            <Suspense fallback={<LoaderPage/>}>
                <div className='lg:w-[calc(100%_-_300px)] md:w-[calc(100%_-_220px)] w-full'>
                    {child}

                </div>
            </Suspense>

        </div>
    )
}
