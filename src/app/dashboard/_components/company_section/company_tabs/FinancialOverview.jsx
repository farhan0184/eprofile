'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function FinancialOverview({ setValue, company, setCompany,isEdit, companyId, updateSingleCompany }) {
    const [data, setData] = React.useState('')
    useEffect(() => {
        if (company) {
            setData(company?.financial)
        }
    }, [company])

    const handlePrev = () => {
        setValue('advantage')
    }
    const handleNext =async () => {
        if(!isEdit){
        setCompany({ ...company, financial: data })
        setValue('milestones')}
        else{
            const res = await updateSingleCompany({ financial: data }, companyId)
            if (res?.data?.statusCode === 200) {
                setCompany(res?.data?.data)
                //     // window.location.reload()
                setValue('milestones')
            }
        }
    }
    return (
        <div>
            <ProfileHeader title={'Financial Overview'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} name={'financial'} value={data} change={(e) => setData(e.target.value)} label={'Overview'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={isEdit}/>
        </div>
    )
}

