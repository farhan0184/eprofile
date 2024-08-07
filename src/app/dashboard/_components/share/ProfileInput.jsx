
import { Label } from '@/components/ui/label'
import React from 'react'


export default function ProfileInput({type, style, label, isStar, change, name, value, defaultValue}) {
    return (
        <div className='w-full'>
            <Label >{label} {isStar&&<span className='text-primary'>*</span>}</Label>
            <input name={name}  defaultValue={value} type={type} className={style} onChange={change}/>
        </div>
    )
}
