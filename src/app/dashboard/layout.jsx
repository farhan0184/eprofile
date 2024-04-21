'use client'
import ProtectedRoute from "@/components/auth/ProtectedRoute"
import SideBar from "./_components/share/SideBar"
import { Suspense } from "react"
import DashboardLayout from "@/layouts/DashboardLayout"
import NextAuth from "@auth-kit/next/NextAuth"


const Layout = ({ children }) => {


  return (
        <Suspense
        fallback={
         <h1>loading</h1>
        }
      >
        <NextAuth fallbackPath={"/sign-in"}><DashboardLayout child={children}/></NextAuth>
      </Suspense>

  )

}

export default Layout
