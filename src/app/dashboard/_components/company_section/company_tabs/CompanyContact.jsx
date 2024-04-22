'use client'
import React, { useEffect } from 'react'
import { ProfileHeader } from '../..';
import ProfileInput from '../../share/ProfileInput';
import ProfileLinkInput from '../../share/ProfileLinkInput';
import { Instagram, Linkedin, LogoMark, Twitter, Youtube } from '@/assets/images';
import GroupBtn from '../../share/GroupBtn';
import { axiosBase } from '@/hooks/axiosSecure';
import { jsonToFormData } from '@/lib/utils';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function CompanyContact({ setValue, company, setCompany, userId }) {
    const router = useRouter()
    const [data, setData] = React.useState({
        street: '',
        // house: '',
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
        setValue('goals')
    }
    const handleNext = async () => {
        const values = { ...company, contact: data };
        console.log(values);
        const formData = jsonToFormData(values);
        const res = await axiosBase.post("/companies", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(res);
        if(res.data.statusCode === 201){
            toast.success(res.data.message, {
                action: {
                    label: 'X',
                    onClick: () => console.log('Undo')
                },
            })
            setCompany(res.data.data)
            router.push('/dashboard/companies')

        }
    }

    useEffect(() => {
        if (company) {
            setData(company?.contact)
        }
    }, [company])
    return (
        <div >
            <ProfileHeader title={'Contact Information'} />
            <div className='mb-5'>
                <h2 className='text-xl text-gray-400 font-bold mb-5'>Address</h2>
                <div className='formGap'>
                    <div className='doubleInput'>
                        <ProfileInput value={data?.street} type={'text'}  label={'Street'} name={'street'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                        {/* <ProfileInput type={'text'} label={'House'} name={'house'} isStar={true} style={'profileInput h-12'} change={ handleChange} /> */}
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput value={data?.city } type={'text'} label={'City'} name={'city'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                        <ProfileInput type={'text'} value={data?.state}  label={'State'} name={'state'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'text'} value={data?.postalCode} label={'Postal Code'} name={'postalCode'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                        <ProfileInput type={'text'} value={data?.country} label={'Country'} name={'country'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                    </div>
                    <div className='doubleInput'>
                        <ProfileInput type={'number'} value={data?.mobileNumber} label={'Mobile Number'} name={'mobileNumber'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                        <ProfileInput type={'email'} value={data?.email} label={'Email'} name={'email'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                    </div>
                    <ProfileInput type={'text'} value={data?.website} label={'Website'} name={'website'} isStar={true} style={'profileInput h-12'} change={ handleChange} />
                </div>
            </div>
            <div className='mb-10'>
                <h2 className='text-xl text-gray-400 font-bold mb-5'>Social Link</h2>
                <div className='formGap'>
                    <ProfileLinkInput image={LogoMark} name={'facebook'} change={ handleChange} value={data?.facebook}/>
                    <ProfileLinkInput image={Twitter} name={'twitter'} value={data?.twitter} change={ handleChange} />
                    <ProfileLinkInput image={Linkedin} name={'linkedin'} value={data?.linkedin} change={ handleChange} />
                    <ProfileLinkInput image={Instagram} value={data?.instagram} name={'instagram'} change={ handleChange} />
                    <ProfileLinkInput image={Youtube} value={data?.youtube} name={'youtube'} change={ handleChange} />
                </div>
            </div>

            {/* <p>{JSON.stringify(data)}</p> */}
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}