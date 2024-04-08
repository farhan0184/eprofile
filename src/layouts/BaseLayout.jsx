"use client";
import Navbar from "@/components/share/Navbar";
import { usePathname } from "next/navigation";
import React from "react";
import AuthLayout from "./AuthLayout";
// import Footer from "@/components/share/Footer";
import FooterTwo from "@/components/share/FooterTwo";

export default function BaseLayout({ child }) {
  const path = usePathname();
  return (
    <section>
      {path === "/sign-in" ||
      path === "/sign-up" ||
      path === "/forgot-password" ||
      path === "/reset-password" ? (
        <AuthLayout child={child} path={path} />
      ) : (
        <>
          {<Navbar />}
          {child}
          <FooterTwo />
        </>
      )}
    </section>
  );
}
