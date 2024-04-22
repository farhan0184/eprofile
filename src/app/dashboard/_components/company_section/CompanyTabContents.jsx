'use client'
import React, { Suspense, useEffect } from 'react'
import { CompanyHistory, CompanyIntro, CompanyLocation, CompanyName, CompanyProducts, Executives, MissionStatement, CompanyTargetMarket, CompanyAdvantage, FinancialOverview, Milestones, Partnerships, Responsibility, CompanyGoals, CompanyContact, Loading, ProfileLoader } from '..'
import { useCompanyStore } from '@/store/userStore'

export default function CompanyTabContents({ value, setValue, companyId }) {
    const [company, setCompany] = React.useState({})
    const user = JSON.parse(localStorage.getItem('user'))
    const { companyData, loading } = useCompanyStore()
    useEffect(() => {
        if (!companyData) return
        setCompany(companyData?.find(item => item?._id === companyId))
    }, [companyId, companyData])
    console.log(company)
    return (
        <>
            {loading ? <ProfileLoader/> : <div>
                {value === 'name' && <CompanyName setValue={setValue} company={company} setCompany={setCompany} isEdit={true} />}
                {value === 'intro' && <CompanyIntro setValue={setValue} company={company} setCompany={setCompany} />}
                {value === 'mission' && <MissionStatement setValue={setValue} company={company} setCompany={setCompany} />}
                {value === 'history' && <CompanyHistory setValue={setValue} company={company} setCompany={setCompany} />}
                {value === 'executives' && <Executives setValue={setValue} company={company} setCompany={setCompany} />}
                {value === 'location' && <CompanyLocation setValue={setValue} company={company} setCompany={setCompany} />}
                {value === 'product' && <CompanyProducts setValue={setValue} company={company} setCompany={setCompany} />}
                {value === 'market' && <CompanyTargetMarket setValue={setValue} company={company} setCompany={setCompany} />}
                {value === 'advantage' && <CompanyAdvantage setValue={setValue} company={company} setCompany={setCompany} />}
                {value === 'overview' && <FinancialOverview setValue={setValue} company={company} setCompany={setCompany} />}
                {value === 'milestones' && <Milestones setValue={setValue} company={company} setCompany={setCompany} />}
                {value === 'partnerships' && <Partnerships setValue={setValue} company={company} setCompany={setCompany} />}
                {value === 'responsibility' && <Responsibility setValue={setValue} company={company} setCompany={setCompany} />}
                {value === 'goals' && <CompanyGoals setValue={setValue} company={company} setCompany={setCompany} />}
                {value === 'contact' && <CompanyContact setValue={setValue} company={company} setCompany={setCompany} userId={user?.id} />}
            </div>}
        </>
    )
}
