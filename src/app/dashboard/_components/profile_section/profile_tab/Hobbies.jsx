'use client'
import React, { useEffect } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Hobbies({setValue, profile, setProfile, profileData, updateProfile, userId}) {
    // profile?.hobbies || 
    const [data, setData] = React.useState('')

    useEffect(() => {
        setData(profile?.hobbies)
    }, [profile])
    const handlePrev = () => {
        setValue('testimonials')
    }
    const handleNext = async () => {
        if(!profileData){setProfile({...profile,hobbies: data})
        setValue('goals')}else{
            const values = { hobbies: data };
            const res = await updateProfile(values, userId)
            if (res.data.statusCode === 200) {
                setProfile(res.data.data)
                setValue('goals')
            }}
    }
    return (
        <div>
            <ProfileHeader title={'Personal Interests or Hobbies (optional)'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Hobbies'} value={data} isStar={false} style={'profileInput h-12'} change={(e) => setData(e.target.value)}/>
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={profileData} />
        </div>
    )
}
