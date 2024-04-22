'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { CompanyTabContents, TabLists } from '../../_components'
import { addCompanyTabList } from '@/lib/data'

export default function TabSection({companyId}) {

    let search = useSearchParams()
    search = search.get('tab')
    const [value, setValue] = React.useState(search || 'name')
    React.useEffect(() => {
        window.history.pushState(
            null,
            '',
            `?tab=${value}`
        )
    }, [value])
    return (
        <section className='md:w-[95%]  w-full md:mx-auto py-10 md:flex '>
            <TabLists data={addCompanyTabList} value={value} setValue={setValue} />
            <div className='2xl:w-[70%] md:w-[63%] w-[95%]  mx-auto flex justify-end'>
                <div className='md:w-[95%] w-full  '>
                    <CompanyTabContents value={value} setValue={setValue} companyId={companyId}/>
                </div>
            </div>
        </section>
    )
}
