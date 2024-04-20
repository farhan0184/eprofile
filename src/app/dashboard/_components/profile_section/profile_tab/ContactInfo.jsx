'use client'
import React, { useEffect, useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import ProfileLinkInput from '../../share/ProfileLinkInput'
import { Instagram, Linkedin, LogoMark, Twitter, Youtube } from '@/assets/images'
import { ProfileHeader } from '../..'
import { useProfileStore } from '@/store/userStore'
import { jsonToFormData } from '@/lib/utils'

export default function ContactInfo({setValue,profile, setProfile, profileData, updateProfile, userId}) {
    // const { loading, profile, setProfile } = useProfileStore()
    // profile?.contactInformation ||
    const [data, setData] = useState( {
            street: '',
            house: '',
            city: '',
            state: '',
            postalCode: '',
            country: '',
            mobileNumber: '',
            email: '',
            website: '',
            facebook: '',
            twitter: '',
            linkedin: '',
            instagram: '',
            youtube: ""        
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        const onChange = { ...data };
        onChange[name] = value
        setData(onChange)
    }

    const handlePrev = () => {
        setValue('objective')
    }
    const handleNext =  async() => {
        // console.log(data)
        // formData.append('contactInformation', JSON.stringify(data))
        if(!profileData){
        setProfile({...profile, contactInformation:data})
        setValue('education')}
        else{
            const values = { contactInformation: data };
            // const formData = jsonToFormData(values);
            const res = await updateProfile(values, userId)
            // console.log(res)
            if (res.data.statusCode === 200) {
                setProfile(res.data.data)
                //     // window.location.reload()
                setValue('education')
            }
        }
    }

    useEffect(() => {
        if(profile){
            setData(profile?.contactInformation)    
        }
    }, [profile])
    return (
        <div>
            <ProfileHeader title={'Contact Information'} />
            <div className='mb-5'>
                <h2 className='text-xl text-gray-400 font-bold mb-5'>Address</h2>
                <div className='formGap'>
                    <div className='doubleInput'>
                        <ProfileInput type={'text'} label={'Street'} value={data?.street} name={'street'} isStar={true} style={'profileInput h-12'} change={handleChange} />
                        <ProfileInput type={'text'} label={'House'} value={data?.house} name={'house'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'text'} label={'City'} value={data?.city} name={'city'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                        <ProfileInput type={'text'} label={'State'} value={data?.state} name={'state'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'text'} label={'Postal Code'} value={data?.postalCode} name={'postalCode'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                        <ProfileInput type={'text'} label={'Country'} value={data?.country} name={'country'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'number'} label={'Mobile Number'} value={data?.mobileNumber} name={'mobileNumber'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                        <ProfileInput type={'email'} label={'Email'} name={'email'} value={data?.email} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                    </div>
                    <ProfileInput type={'text'} label={'Website'} value={data?.website} name={'website'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                </div>
            </div>
            <div className='mb-10'>
                <h2 className='text-xl text-gray-400 font-bold mb-5'>Social Link</h2>
                <div className='formGap'>
                    <ProfileLinkInput image={LogoMark} value={data?.facebook} name={'facebook'} change={ handleChange}/>
                    <ProfileLinkInput image={Twitter} value={data?.twitter} name={'twitter'} change={ handleChange}/>
                    <ProfileLinkInput image={Linkedin} value={data?.linkedin} name={'linkedin'} change={ handleChange}/>
                    <ProfileLinkInput image={Instagram} value={data?.instagram} name={'instagram'} change={ handleChange}/>
                    <ProfileLinkInput image={Youtube} value={data?.youtube} name={'youtube'} change={ handleChange}/>
                </div>
            </div>

            {/* <p>{JSON.stringify(data)}</p> */}
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} profileData={profileData} />
        </div>
    )
}
