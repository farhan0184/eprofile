'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyHistory({setValue, company, setCompany, isEdit, companyId, updateSingleCompany}) {
    const [data, setData] = React.useState('')

    const handlePrev = () => {
        setValue('mission')
    }
    const handleNext = async () => {
        if(!isEdit){
        setCompany({ ...company, history: data })
        setValue('executives')}
        else{
            const res = await updateSingleCompany({ history: data }, companyId)
            if (res?.data?.statusCode === 200) {
                setCompany(res?.data?.data)
                //     // window.location.reload()
                setValue('executives')
            }
        }
    }

    useEffect(() => {
        if(company){
            setData(company?.history)
        }
    },[company])
        
    return (
        <div>
            <ProfileHeader title={'History'} />
            <div className='mb-10'>
                <ProfileTextArea value={data} type={'text'} label={'History'} isStar={false} style={'profileInput h-28'}   change={(e) => setData(e.target.value)} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={isEdit}/>
        </div>
    )
}
