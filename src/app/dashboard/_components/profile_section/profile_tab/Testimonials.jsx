'use client'
import React, { useEffect, useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Testimonials({ setValue, profile, setProfile, profileData, updateProfile, userId }) {
    // profile?.testimonials || 
    const [data, setData] = useState('')

    const handlePrev = () => {
        setValue('testimonials')
    }
    const handleNext = async () => {
        if(!profileData){setProfile({ ...profile, testimonials: data })
        setValue('hobbies')}
        else{
            const values = { testimonials: data };
            const res = await updateProfile(values, userId)
            if (res.data.statusCode === 200) {
                setProfile(res.data.data)
                setValue('hobbies')
            }
        }
    }
    useEffect(() => {
        setData(profile?.testimonials)
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Testimonials or Recommendations'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Testimonials'} value={data} isStar={false} style={'profileInput h-12'} change={(e) => setData(e.target.value)} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={profileData}/>
        </div>
    )
}
