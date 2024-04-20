'use client'
import React, { useEffect } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import { ProfileHeader } from '../..'
import CustomBtn from '@/components/share/CustomBtn'

export default function WorkExperience({ setValue, profile, setProfile, profileData, updateProfile, userId }) {
    // profile?.experience ||
    const [data, setData] = React.useState([{
        company: '',
        jobTitle: '',
        dateOfEmployment: '',
        responsibilities: ''
    }])
    const handleClick = () => {
        setData(prev => [...prev, {
            company: '',
            jobTitle: '',
            dateOfEmployment: '',
            responsibilities: ''
        }])
    }

    const handleChange = (e, i) => {
        const { name, value } = e.target;

        const changeData = data.map((item, index) => {
            let object = { ...item, [name]: value }
            return index === i ? object : item
        })
        // const onChangeVal = [...data];
        // onChangeVal[i][name] = value;
        setData(changeData)
    }
    const handleDelete = (i) => {
        const deleteData = [...data];
        deleteData.splice(i, 1)
        setData(deleteData)
    }
    const handlePrev = () => {
        setValue('education')
    }
    const handleNext = async () => {
        if (!profileData) {
            setProfile({ ...profile, experience: data })
            setValue('skills')
        }
        else {
            const values = { experience: data };
            // console.log(values);
            const res = await updateProfile(values, userId)
            if (res?.data?.statusCode === 200) {
                setProfile(res.data.data)
                //     // window.location.reload()
                setValue('skills')
            }
        }
    }
    useEffect(() => {
        if (profile?.experience) setData(profile?.experience)
        else setData([{
            company: '',
            jobTitle: '',
            dateOfEmployment: '',
            responsibilities: ''
        }])
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Work Experience'} />
            {data?.map((val, i) => <div key={i} className='space-y-4  border-[1px] mb-5 border-gray-300 p-5 rounded-lg relative'>
                <div className=' space-y-4'>
                    <ProfileInput type={'text'} name={'company'} value={val.company} label={'Company Name'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e, i)} />
                    <ProfileInput type={'text'} name={'jobTitle'} value={val.jobTitle} label={'Job Title'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e, i)} />
                    <ProfileInput type={'date'} name={'dateOfEmployment'} value={val.dateOfEmployment} label={'Dates Of Employment'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e, i)} />
                    <ProfileInput type={'text'} name={'responsibilities'} value={val.responsibilities} label={'Responsibilities'} isStar={false} style={'profileInput h-12'} change={(e) => handleChange(e, i)} />
                </div>
                <CustomBtn style={'p-0 w-8 rounded-full h-8 absolute -top-2 right-2'} title={'X'} click={() => handleDelete(i, true)} />
            </div>)}
            <div className='md:mt-8 mt-10 md:flex md:justify-start  ' >
                <CustomBtn style={'w-min text-2xl font-bold'} title={'+'} click={handleClick} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={profileData} />
        </div>
    )
}
