'use client'
import React, { Suspense, useEffect } from 'react'
import { CompanyHistory, CompanyIntro, CompanyLocation, CompanyName, CompanyProducts, Executives, MissionStatement, CompanyTargetMarket, CompanyAdvantage, FinancialOverview, Milestones, Partnerships, Responsibility, CompanyGoals, CompanyContact, Loading, ProfileLoader } from '..'
import { useCompanyStore } from '@/store/userStore'
import { useAuth } from '@/app/auth/provider'

export default function CompanyTabContents({ value, setValue, companyId, isEdit }) {
    const [company, setCompany] = React.useState({})
    const auth = useAuth()
    // console.log(auth)
    const { companyData, loading, updateSingleCompany, setSingleCompany } = useCompanyStore()
    // console.log(companyData)
    useEffect(() => {
        if (!companyData) return
        setCompany(companyData?.find(item => item?._id === companyId))
    }, [companyId, companyData])
    // console.log(company)
    return (
        <>
            {loading ? <ProfileLoader/> : <div>
                {value === 'name' && <CompanyName setValue={setValue} company={company} setCompany={setCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'intro' && <CompanyIntro setValue={setValue} company={company} setCompany={setCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'mission' && <MissionStatement setValue={setValue} company={company} setCompany={setCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'history' && <CompanyHistory setValue={setValue} company={company} setCompany={setCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'executives' && <Executives setValue={setValue} company={company} setCompany={setCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'location' && <CompanyLocation setValue={setValue} company={company} setCompany={setCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'product' && <CompanyProducts setValue={setValue} company={company} setCompany={setCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'market' && <CompanyTargetMarket setValue={setValue} company={company} setCompany={setCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'advantage' && <CompanyAdvantage setValue={setValue} company={company} setCompany={setCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'overview' && <FinancialOverview setValue={setValue} company={company} setCompany={setCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'milestones' && <Milestones setValue={setValue} company={company} setCompany={setCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'partnerships' && <Partnerships setValue={setValue} company={company} setCompany={setCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'responsibility' && <Responsibility setValue={setValue} company={company} setCompany={setCompany}  isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'goals' && <CompanyGoals setValue={setValue} company={company} setCompany={setCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
                {value === 'contact' && <CompanyContact setValue={setValue} company={company} setCompany={setCompany} userId={auth?.authUser?.id} setSingleCompany={setSingleCompany} isEdit={isEdit} companyId={companyId} updateSingleCompany={updateSingleCompany}/>}
            </div>}
        </>
    )
}
