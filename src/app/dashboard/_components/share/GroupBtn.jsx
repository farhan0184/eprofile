import CustomBtn from '@/components/share/CustomBtn'
import React from 'react'

export default function GroupBtn({handlePrev, handleNext, profileData }) {
    // console.log(profileData)
    return (
        <div className='md:mt-16 flex md:justify-end justify-between  md:w-full w-[95%] mx-auto ' >
            <CustomBtn style={'w-min md:hidden block'} title={'Previous'} click={handlePrev} />
            <CustomBtn style={'w-min'} title={profileData ? 'Update & Next' : 'Save & Next'} click={handleNext} />
        </div>
    )
}
