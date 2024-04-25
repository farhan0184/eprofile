'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyTargetMarket({ setValue, company, setCompany,isEdit, companyId, updateSingleCompany }) {
    const [data, setData] = React.useState('')

    useEffect(() => {
        if (company) {
            setData(company?.targetMarket)
        }
    }, [company])

    const handlePrev = () => {
        setValue('product')
    }
    const handleNext = async() => {
        if(!isEdit){
        setCompany({ ...company, targetMarket: data })
        setValue('advantage')}
        else{
            const res = await updateSingleCompany({ targetMarket: data }, companyId)
            if (res?.data?.statusCode === 200) {
                setCompany(res?.data?.data)
                //     // window.location.reload()
                setValue('advantage')
            }
        }
    }
    return (
        <div>
            <ProfileHeader title={'Target Market'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} name={'targetMarket'} value={data} change={(e) => setData(e.target.value)} label={'Target Market'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={isEdit}/>
        </div>
    )
}
