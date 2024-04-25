'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..'
import ProfileTextArea from '../../share/ProfileTextArea'
import GroupBtn from '../../share/GroupBtn'

export default function CompanyLocation({setValue, company, setCompany, isEdit, companyId, updateSingleCompany}) {
    const [data, setData] = React.useState('')
    useEffect(() => {
        if(company){ setData(company?.location)}
    }, [company])

    const handlePrev = () => {
        setValue('executives')
    }
    const handleNext = async() => {
        if(!isEdit){
        setCompany({ ...company, location: data })
        setValue('product')}
        else{
            const res = await updateSingleCompany({ location: data }, companyId)
            if (res?.data?.statusCode === 200) {
                setCompany(res?.data?.data)
                //     // window.location.reload()
                setValue('product')
            }
        }
    }
    return (
        <div>
            <ProfileHeader title={'Location and Facilities'} />
            <div className='mb-10'>
                <ProfileTextArea type={'text'} name={'location'} value={data} change={(e) => setData(e.target.value)} label={'Location'} isStar={false} style={'profileInput h-28'} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={isEdit}/>
        </div>
    )
}
