'use client'
import React, { useEffect, useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Publications({setValue, profile, setProfile, profileData, updateProfile, userId}) {
    // profile?.publications || 
    const [data, setData] = useState('')

    const handlePrev = () => {
        setValue('project')
    }
    const handleNext = async () => {
        if(!profileData){
        setProfile({...profile,publications: data})
        setValue('testimonials')}
        else{
            const values = { publications: data };
            const res = await updateProfile(values, userId)
            if (res.data.statusCode === 200) {
                setProfile(res.data.data)
                setValue('testimonials')
            }
        }
    }
    useEffect(() => {
        setData(profile?.publications)
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Publications or Presentations (if applicable)'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Publications'} value={data} isStar={false} style={'profileInput h-12'} change={(e) => setData(e.target.value)}/>
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={profileData}/>
        </div>
    )
}
