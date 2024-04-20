'use client'
import React, { useEffect, useState } from 'react'
import { ContactInfo, Education, Goals, Hobbies, Languages, Loading, Member, Name, Objective, ProfileLoader, Projects, Publications, Skills, Testimonials, Title, Volunteer, WorkExperience } from '..'
import { useProfileStore } from '@/store/userStore'


export default function ProfileTabContents({ value, setValue }) {
    const { profileData, updateProfile, loading, setUserProfile } = useProfileStore()
    const user = JSON.parse(localStorage.getItem('user'))
    const [profile, setProfile] = useState({})


    useEffect(() => {
        if (profileData)
            setProfile(profileData)
    }, [profileData])
    // console.log(profileData)
    return (

        <>

            {loading?<ProfileLoader/>:<div>
                {value === 'name' && <Name setValue={setValue} setProfile={setProfile} profile={profile} userId={user?.id} loading={loading} updateProfile={updateProfile} profileData={profileData} />}
                {value === 'title' && <Title setValue={setValue} setProfile={setProfile} profile={profile} loading={loading} updateProfile={updateProfile} profileData={profileData} userId={user?.id} />}
                {value === 'objective' && <Objective setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={user?.id} />}
                {value === 'contact' && <ContactInfo setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={user?.id}/>}
                {value === 'education' && <Education setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={user?.id}/>}
                {value === 'work' && <WorkExperience setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={user?.id}/>}
                {value === 'skills' && <Skills setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={user?.id}/>}
                {value === 'member' && <Member setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={user?.id}/>}
                {value === 'languages' && <Languages setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={user?.id}/>}
                {value === 'volunteer' && <Volunteer setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={user?.id}/>}
                {value === 'projects' && <Projects setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={user?.id}/>}
                {value === 'publications' && <Publications setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={user?.id}/>}
                {value === 'testimonials' && <Testimonials setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={user?.id}/>}
                {value === 'hobbies' && <Hobbies setValue={setValue} setProfile={setProfile} profile={profile} updateProfile={updateProfile} profileData={profileData} userId={user?.id}/>}
                {value === 'goals' && <Goals setValue={setValue} setProfile={setProfile} profile={profile} setUserProfile={setUserProfile} updateProfile={updateProfile} profileData={profileData} userId={user?.id}/>}
            </div>}
        </>
    )
}
