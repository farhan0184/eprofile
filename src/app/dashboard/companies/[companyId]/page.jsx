import React from 'react'
import TabSection from '../_components/TabSection'

export default function EditCompany({params}) {
    // console.log(params)
  return (
    <TabSection companyId = {params.companyId} isEdit={true}/>
  )
}
