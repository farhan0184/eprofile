'use client'
import React, { useEffect, useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'
import { axiosBase } from '@/hooks/axiosSecure'
import { jsonToFormData } from '@/lib/utils'
import { toast } from "sonner"
import { useProfileStore } from '@/store/userStore'

export default function Goals({ setValue, profile, setProfile, userId, profileData, updateProfile, setUserProfile }) {

    const [data, setData] = React.useState('')


    // console.log(user.id)
    useEffect(() => {
        setData(profile?.careerGoals)
    }, [profile])

    const handlePrev = () => {
        setValue("hobbies");
    };
    const handleNext = async () => {
        if (!profileData) {
            const values = { ...profile, careerGoals: data };
            const formData = jsonToFormData(values);
            const res = await setUserProfile(formData)
            if (res.data.statusCode === 200) {

                setProfile(values)
                setValue('name')

            }
        }
        else {
            const values = { careerGoals: data };
            const res = await updateProfile(values, userId)
            if (res.data.statusCode === 200) {
                setProfile(res.data.data)
                setValue('name')
            }
        }
        // console.log(res);
    };

    return (
        <div>
            <ProfileHeader title={'Career Goals or Aspirations'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Goals'} value={data} isStar={false} style={'profileInput h-12'} change={(e) => setData(e.target.value)} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={profileData}/>
        </div>
    )
}
