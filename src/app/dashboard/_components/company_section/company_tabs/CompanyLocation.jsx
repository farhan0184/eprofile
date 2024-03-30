'use client'
import React from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyLocation({setValue}) {
    const [data, setData] = React.useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('executives')
    }
    const handleNext = () => {
        setValue('product')
    }
    return (
        <div>
            <ProfileHeader title={'Location and Facilities'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} label={'Location'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}