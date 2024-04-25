'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyAdvantage({ setValue, company, setCompany, isEdit, companyId, updateSingleCompany }) {
    const [data, setData] = React.useState('')

    useEffect(() => {
        if (company) {
            setData(company?.advantage)
        }
    },[company])
    const handlePrev = () => {
        setValue('market')
    }
    const handleNext = async () => {
        if(!isEdit){
            setCompany({ ...company, advantage: data })
            setValue('overview')
        }
        else{
            const res = await updateSingleCompany({ advantage: data }, companyId)
            if (res?.data?.statusCode === 200) {
                setCompany(res?.data?.data)
                //     // window.location.reload()
                setValue('overview')
            }
        }
    }
    return (
        <div>
            <ProfileHeader title={'Competitive Advantage'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} name={'advantage'} value={data} change={(e) => setData(e.target.value)} label={'Advantage'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={isEdit}/>
        </div>
    )
}

