'use client'
import React, { useState } from 'react'
import ProfileTextArea from '../share/ProfileTextArea'
import GroupBtn from '../share/GroupBtn'

export default function Objective({ setValue }) {
    const [data, setData] = useState({
        objective: ''
    })

    const handlePrev = () => {
        setValue('name')
    }
    const handleNext = () => {
        console.log(data)
        setValue('contact')
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'>Title or Occupation</h1>
            <div>
                <ProfileTextArea label={'objective'}  name={'objective'} isStar={false} style={'profileInput p-3 h-24'} change={(e) => setData({ ...data, objective: e.target.value })} />
            </div>
            <GroupBtn handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    )
}
