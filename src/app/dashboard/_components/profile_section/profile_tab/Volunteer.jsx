'use client'
import React, { useEffect, useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'

export default function Volunteer({setValue, profile, setProfile, profileData, updateProfile, userId}) {
    // profile?.volunteerWork || 
    const [data, setData] = useState( '')

    const handlePrev = () => {
        setValue('languages')
    }
    const handleNext = async () => {
        if(!profileData){
        setProfile({...profile,volunteerWork: data})
        setValue('projects')}
        else{
            const values = { volunteerWork: data };
            // console.log(values);
            const res = await updateProfile(values, userId)
            if (res?.data?.statusCode === 200) {
                setProfile(res.data.data)
                //     // window.location.reload()
                setValue('projects')
            }
        }
    }
    useEffect(() => {
        setData(profile?.volunteerWork)
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Volunteer Work or Community Involvement'} />
            <div className='mb-10'>
                <ProfileInput type={'text'} label={'Volunteer'} value={data} isStar={false} style={'profileInput h-12'} change={(e) => setData(e.target.value)}/>
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={profileData}/>
        </div>
    )
}
