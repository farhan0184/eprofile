'use client'
import { Company1 } from '@/assets/images'
import CustomBtn from '@/components/share/CustomBtn'
import LoaderPage from '@/components/share/LoaderPage'
import { useCompanyStore } from '@/store/userStore'
import { Eye, FilePenLine, Globe, Mail, Phone, Star, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Companies() {
    const route = useRouter()
    const [data, setData] = React.useState([])
    const handleAdd = () => {
        // window.location.href = '/dashboard/companies/add-company'
        route.push('/dashboard/companies/add-company')
    }

    const { loading,companyData } = useCompanyStore()
    // console.log(companyData)
    
    return (
        <div className='container'>
            <div className='mb-4 flex justify-end'>
                <CustomBtn style={''} title={'Add New'} click={handleAdd} />
            </div>
            {/* companies details */}
            <div className='flex flex-col gap-5 '>
                {loading ? <div className='h-screen'>
                    <LoaderPage />
                </div> : companyData?.map((item, idx) => (
                    <div key={idx} className=''>
                        <div className='border-[1px] flex md:flex-row flex-col rounded-lg'>
                            <div className='flex md:w-1/2 w-full'>
                                <div className='border-r-[1px] flex items-center w-36'>
                                    <Image src={item.photo} alt='company1' width={130} height={100} />
                                </div>
                                <div className='w-full px-5 flex items-center py-4 border-r-[1px]'>
                                    <div>
                                        <h3 className='2xl:text-2xl text-xl font-bold mb-2'>{item.name}</h3>
                                        <p className='text-gray-400 mb-2 text-[12px]'>{item.introduction}</p>
                                        <div className='flex gap-2'>
                                            <p className='flex items-center'><Star size={20} className='mr-2 text-yellow-400' /> 5.0</p>
                                            <p>(250+)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-1/2 w-full flex md:border-t-0 border-t-[1px]'>
                                <div className='px-5 border-r-[1px] w-1/2 py-3 text-[12px] center flex-col gap-3'>
                                    <div className='flex gap-2'>
                                        <Phone size={20} />
                                        <p>+8801700-000000</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Mail size={20} />
                                        <p>Info@eprofiles.net</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Globe size={20} />
                                        <p>www.eprofiles.net</p>
                                    </div>
                                </div>
                                <div className='w-1/4 center border-r-[1px]'>
                                    <h3 className='text-[16px] font-bold'>Published</h3>
                                </div>
                                <div className='w-1/4  flex items-center justify-between gap-3 px-2'>
                                    <Eye size={20} />
                                    <FilePenLine onClick={()=>route.push(`/dashboard/companies/${item._id}`)} className='cursor-pointer' size={20} />
                                    <Trash2 size={20} />
                                </div>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}
