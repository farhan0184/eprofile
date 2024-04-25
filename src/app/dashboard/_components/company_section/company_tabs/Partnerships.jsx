'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function Partnerships({ setValue, company, setCompany,isEdit, companyId, updateSingleCompany }) {
    const [data, setData] = React.useState('')
    useEffect(() => {
        if(company){ setData(company?.partnerships)}
    }, [company])

    const handlePrev = () => {
        setValue('milestones')
    }
    const handleNext = async () => {
        if(!isEdit){
        setCompany({ ...company, partnerships: data })
        setValue('responsibility')}
        else{
            const res = await updateSingleCompany({ partnerships: data }, companyId)
            if (res?.data?.statusCode === 200) {
                setCompany(res?.data?.data)
                //     // window.location.reload()
                setValue('responsibility')
            }
        }
    }
    return (
        <div>
            <ProfileHeader title={'Partnerships or Affiliations'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} name={'partnerships'} value={data} change={(e) => setData(e.target.value)} label={'Affiliations'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={isEdit}/>
        </div>
    )
}

