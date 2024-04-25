'use client'
import React, { useEffect, useState } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function Responsibility({ setValue,company, setCompany, isEdit, companyId, updateSingleCompany }) {
    const [data, setData] = useState('')
    useEffect(() => {
        if(company){ setData(company?.responsibility)}
    },[company])

    const handlePrev = () => {
        setValue('partnerships')
    }
    const handleNext = () => {
        if(!isEdit){
        setCompany({ ...company, responsibility: data })
        setValue('goals')}
        else{
            const res = updateSingleCompany({ responsibility: data }, companyId)
            if (res?.data?.statusCode === 200) {
                setCompany(res?.data?.data)
                //     // window.location.reload()
                setValue('goals')
            }
        }
    }
    return (
        <div>
            <ProfileHeader title={'Social Responsibility Initiatives'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} name={'responsibility'} value={data} change={(e) => setData(e.target.value)} label={'Responsibility'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={isEdit}/>
        </div>
    )
}

