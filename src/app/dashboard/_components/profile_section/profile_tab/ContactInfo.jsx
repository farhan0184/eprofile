'use client'
import React, { useState } from 'react'
import GroupBtn from '../../share/GroupBtn'
import ProfileInput from '../../share/ProfileInput'
import ProfileLinkInput from '../../share/ProfileLinkInput'
import { Instagram, Linkedin, LogoMark, Twitter, Youtube } from '@/assets/images'
import { ProfileHeader } from '../..'

export default function ContactInfo({setValue}) {
    const [data, setData] = useState({
        address: {
            street: '',
            house: '',
            city: '',
            state: '',
            postal_code: '',
            country: '',
            mobile_number: '',
            email: '',
            website: ''
        },
        social_link:{
            facebook: '',
            twitter: '',
            linkedin: '',
            instagram: '',
            youtube: ""
        }
    })

    const handleChange = (e, isAddress) => {
        const { name, value } = e.target;
        const onChange = { ...data };
        if (isAddress) {
            onChange.address[name] = value
        }else{
            onChange.social_link[name] = value
        }
        setData(onChange)
    }

    const handlePrev = () => {
        setValue('objective')
    }
    const handleNext = () => {
        console.log(data)
        setValue('education')
    }
    return (
        <div>
            <ProfileHeader title={'Contact Information'} />
            <div className='mb-5'>
                <h2 className='text-xl text-gray-400 font-bold mb-5'>Address</h2>
                <div className='formGap'>
                    <div className='doubleInput'>
                        <ProfileInput type={'text'} label={'Street'} name={'street'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                        <ProfileInput type={'text'} label={'House'} name={'house'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'text'} label={'City'} name={'city'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                        <ProfileInput type={'text'} label={'State'} name={'state'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'text'} label={'Postal Code'} name={'postal_code'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                        <ProfileInput type={'text'} label={'Country'} name={'country'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'number'} label={'Mobile Number'} name={'mobile_number'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                        <ProfileInput type={'email'} label={'Email'} name={'email'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                    </div>
                    <ProfileInput type={'text'} label={'Website'} name={'website'} isStar={true} style={'profileInput h-12'} change={(e) => handleChange(e, true)} />
                </div>
            </div>
            <div className='mb-10'>
                <h2 className='text-xl text-gray-400 font-bold mb-5'>Social Link</h2>
                <div className='formGap'>
                    <ProfileLinkInput image={LogoMark} name={'facebook'} change={(e) => handleChange(e, false)}/>
                    <ProfileLinkInput image={Twitter} name={'twitter'} change={(e) => handleChange(e, false)}/>
                    <ProfileLinkInput image={Linkedin} name={'linkedin'} change={(e) => handleChange(e, false)}/>
                    <ProfileLinkInput image={Instagram} name={'instagram'} change={(e) => handleChange(e, false)}/>
                    <ProfileLinkInput image={Youtube} name={'youtube'} change={(e) => handleChange(e, false)}/>
                </div>
            </div>

            {/* <p>{JSON.stringify(data)}</p> */}
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}