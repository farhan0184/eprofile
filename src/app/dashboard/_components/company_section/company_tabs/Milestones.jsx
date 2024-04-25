'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function Milestones({ setValue, company, setCompany,isEdit, companyId, updateSingleCompany }) {
    const [data, setData] = React.useState('')

    useEffect(() => {
        if (company) {
            setData(company?.achievements)
        }
    }, [company])

    const handlePrev = () => {
        setValue('overview')
    }
    const handleNext =async () => {
        if(!isEdit){
        setCompany({ ...company, achievements: data })
        setValue('partnerships')}
        else{
            const res = await updateSingleCompany({ achievements: data }, companyId)
            if (res?.data?.statusCode === 200) {
                setCompany(res?.data?.data)
                //     // window.location.reload()
                setValue('partnerships')
            }
        }
    }
    return (
        <div>
            <ProfileHeader title={'Milestones and Achievements'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} name={'achievements'} value={data} change={(e) => setData(e.target.value)} label={'Achievements'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={isEdit}/>
        </div>
    )
}

