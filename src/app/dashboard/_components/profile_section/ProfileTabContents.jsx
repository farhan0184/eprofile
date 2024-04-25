'use client'
import React, { useEffect, useState } from 'react'
import { ContactInfo, Education, Goals, Hobbies, Languages, Loading, Member, Name, Objective, ProfileLoader, Projects, Publications, Skills, Testimonials, Title, Volunteer, WorkExperience } from '..'
import { useProfileStore } from '@/store/userStore'
import { useAuth } from '@/app/auth/provider'


export default function ProfileTabContents({ value, setValue }) {
    const { profileData, updateProfile, loading, setUserProfile } = useProfileStore()
    const {authUser  } = useAuth()
    // console.log(authUser?.id)
    const [profile, setProfile] = useState({})


    useEffect(() => {
        if (profileData)
            setProfile(profileData)
    }, [profileData])
    // console.log(profileData)
    return (

        <>

            {loading?<ProfileLoader/>:<div>
                {value === 'name' && <Name setValue={setValue} setProfile={setProfile} profile={profile} userId={authUser?.id} loading={loading} updateProfile={updateProfile} profileData={profileData} />}
                {value === 'title' && <Title setValue={setValue} setProfile={setProfile} profile={profile} loading={loading} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id} />}
                {value === 'objective' && <Objective setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id} />}
                {value === 'contact' && <ContactInfo setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id}/>}
                {value === 'education' && <Education setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id}/>}
                {value === 'work' && <WorkExperience setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id}/>}
                {value === 'skills' && <Skills setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id}/>}
                {value === 'member' && <Member setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id}/>}
                {value === 'languages' && <Languages setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id}/>}
                {value === 'volunteer' && <Volunteer setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id}/>}
                {value === 'projects' && <Projects setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id}/>}
                {value === 'publications' && <Publications setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id}/>}
                {value === 'testimonials' && <Testimonials setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id}/>}
                {value === 'hobbies' && <Hobbies setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id}/>}
                {value === 'goals' && <Goals setValue={setValue} setProfile={setProfile} profile={profile} setUserProfile={setUserProfile} updateProfile={updateProfile} profileData={profileData} userId={authUser?.id}/>}
            </div>}
        </>
    )
}
