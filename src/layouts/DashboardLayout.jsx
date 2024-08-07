'use client'
import { useAuth } from '@/app/auth/provider'
import SideBar from '@/app/dashboard/_components/share/SideBar'
import LoaderPage from '@/components/share/LoaderPage'

import { useCompanyStore, useProfileStore } from '@/store/userStore'
import React, { Suspense, useEffect } from 'react'

export default function DashboardLayout({ child }) {
    const { profileData, getProfile } = useProfileStore()
    const { getCompanies, companyData } = useCompanyStore()
    const { authUser, isAuth } = useAuth()
    // console.log(isAuth)

    useEffect(() => {
        getProfile(authUser?.id)
    }, [authUser?.id])
    useEffect(() => {
        getCompanies()
    }, [])
    return (
        <div className='flex ' suppressHydrationWarning={true}>
            <SideBar image={profileData?.photo} />
            <Suspense fallback={<LoaderPage />}>
                <div className='lg:w-[calc(100%_-_300px)] md:w-[calc(100%_-_220px)] w-full'>
                    {child}
                </div>
            </Suspense>

        </div>
    )
}
