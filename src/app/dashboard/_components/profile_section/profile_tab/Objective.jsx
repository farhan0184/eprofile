'use client'
import React, { useEffect, useMemo, useState } from 'react'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'
import { ProfileHeader } from '../..'
import { useProfileStore } from '@/store/userStore'
import { jsonToFormData } from '@/lib/utils'

export default function Objective({ setValue, profile, setProfile, profileData, updateProfile, userId }) {
    // const { loading, profile, setProfile } = useProfileStore()
    // profile?.objective ||
    const [data, setData] = useState('')

    const handlePrev = () => {
        setValue('name')
    }
    const handleNext = async () => {
        if (!profileData) {
            setProfile({ ...profile, objective: data })
            setValue('contact')
        }
        else {
            const values = { objective: data };
            // const formData = jsonToFormData(values);
            const res = await updateProfile(values, userId)
            // console.log(res)
            if (res.data.statusCode === 200) {
                setProfile(res.data.data)
                //     // window.location.reload()
                setValue('contact')
            }
        }
    }
    useEffect(() => {
        setData(profile?.objective)
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Title or Occupation'} />
            <div className='mb-10'>
                <ProfileTextArea label={'objective'} value={data} name={'objective'} isStar={false} style={'profileInput p-3 h-24'} change={(e) => setData(e.target.value)} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={profileData} />
        </div>
    )
}
