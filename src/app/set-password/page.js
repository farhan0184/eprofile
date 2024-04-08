"use client";
import Image from "next/image";
import logo from "./../../assets/logo.png";
import men from "../,,/../../assets/Login/character2.png";
import blob1 from "../,,/../../assets/Login/blob1.png";
import blob2 from "../,,/../../assets/Login/blob2.png";
import blob3 from "../,,/../../assets/Login/blob3.png";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const ForgotPassword = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen  px-5 lg:px-20 py-3 lg:py-6 w-full bg-primary-foreground">
      {/* blob */}

      <div className="hidden lg:block">
        <Image
          className="absolute left-0 bottom-0 w-ful h-ful"
          src={blob1}
          height={10}
          width={355}
          alt="blob"
        />

        <Image
          className="absolute translate-[360deg] right-[290px] top-10 w-ful h-ful"
          src={blob2}
          height={120}
          width={95}
          alt="blob"
        />

        <Image
          className="absolute  bottom-10 right-1 w-ful h-ful"
          src={blob3}
          height={120}
          width={110}
          alt="blob"
        />
      </div>

      <div className="max-w-5xl mt-5 lg:mt-20 flex justify-center items-center mx-auto">
        <div className="py-4 lg:py-8">
          <div className="flex  flex-col items-center lg:flex-row justify-between gap-10">
            <div className="w-full   order-2 mb- lg:mb-10 lg:order-1 z-50 mt-4  h-full">
              <div className="pb-2 lg:pb-5 flex justify-center gap-1 items-center">
                <div className="flex items-center gap-2">
                  <div className="p-1 border-2 border-orange rounded-lg">
                    <Image
                      className="mx-auto "
                      src={logo}
                      height={18}
                      width={22}
                      alt="logo"
                    />
                  </div>
                  <h3 className="font-medium text-[20px] text-left text-dark">
                    eProfiles
                  </h3>
                </div>
              </div>

              <div className="rounded-xl h w-full p-10">
                <h1 className="font-bold text-dark text-center text-[22px]">
                  Set a New Password
                </h1>

                <div className="mt-3 md:mt-4 lg:mt-6">
                  <form className="relative">
                    {/* Pass Input field */}

                    <div className="relative mb-5">
                      <input
                        type={open ? "text" : "password"}
                        placeholder=" Password"
                        name="password"
                        className="px-3 relative py-3 rounded-md w-full border-2 mb-2 text-dark placeholder:text-slate-700 border-slate-200 outline-blue-500"
                      />
                      {/* eye icon */}
                      <span
                        onClick={() => setOpen(!open)}
                        className="absolute text-[19px] right-3 top-[17px]"
                      >
                        {open ? <FaEye /> : <FaRegEyeSlash />}
                      </span>
                    </div>

                    <div className="relative">
                      <input
                        type={open ? "text" : "password"}
                        placeholder="Confirm password"
                        name="confirm-password"
                        className="px-3 relative py-3 rounded-md w-full border-2 mb-2 text-dark placeholder:text-slate-700 border-slate-200 outline-blue-500"
                      />
                      {/* eye icon */}
                      <span
                        onClick={() => setOpen(!open)}
                        className="absolute text-[19px] right-3 top-[17px]"
                      >
                        {open ? <FaEye /> : <FaRegEyeSlash />}
                      </span>
                    </div>

                    {/* Pass Input field */}

                    <div className="mt-5 md:mt-6 lg:mt-8">
                      <Link href="/success">
                        <button
                          className="py-3 w-full font-medium bg-primary text-white rounded-lg"
                          type="submit"
                        >
                          Continue
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="w-[60%] lg:w-full order-1 lg:order-2 mt- h-ull p-4">
              <Image height={450} width={474} src={men} alt="men" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
