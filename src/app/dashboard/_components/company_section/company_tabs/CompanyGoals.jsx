'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyGoals({ setValue, company, setCompany, isEdit, companyId, updateSingleCompany }) {
    const [data, setData] = React.useState('')

    useEffect(() => {
        if (company) {
            setData(company?.goals)
        }
    }, [company])

    const handlePrev = () => {
        setValue('responsibility')
    }
    const handleNext = async() => {
        if(!isEdit){
        setCompany({ ...company, goals: data })
        setValue('contact')}
        else{
            const res = await updateSingleCompany({ goals: data }, companyId)
            if (res?.data?.statusCode === 200) {
                setCompany(res?.data?.data)
                //     // window.location.reload()
                setValue('contact')
            }
        }
    }
    return (
        <div>
            <ProfileHeader title={'Future Goals and Outlook'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} name={'goals'} value={data} change={(e) => setData(e.target.value)} label={'Future Goals'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={isEdit}/>
        </div>
    )
}
