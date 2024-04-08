import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import code from "../../assets/images/pc.png";
import cap from "../../assets/images/cap.png";
import user from "../../assets/images/user.png";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/share/Container";
import Header from "@/components/share/Header";

const Press = ({ title }) => {
  return (
    <div>
      <Header title={"Press"} />

      <Container>
        {/* header */}
        <header className="py-3 lg:py-6">
          <div className="flex items-center justify-between flex-wrap">
            <div>
              <h3 className="font-medium text-[22px]">All Press</h3>
            </div>

            <div>
              <div className="flex items-center gap-6">
                <div className="h-8 w-8 border shadow-lg bg-[#ffffff] rounded-full">
                  <IoSearchOutline className="mx-auto mt-[6px] text-xl" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* cover image with overlay */}

        <div className="relative mb-5 lg:mb-10 rounded-md w-full h-[250px] lg:h-[380px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-md"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/mDzrRth/4394e91108e011b0d07581596959713b-Expires-1713744000-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-f-R.jpg")',
              backgroundSize: "cover`",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          <div className="absolute bottom-1 lg:bottom-2 left-2 lg:left-4 p-4 text-white z-10">
            <button className="px-4 text-[15px] py-[5px] mb-2 rounded-md bg-primary text-white">
              Technology
            </button>
            <h1 className="text-xl lg:text-3xl font-bold mb-2">
              The Impact of Technology on the <br /> Workplace: How Technology
              is Changing
            </h1>
            <div className="flex items-center gap-2">
              <Image
                className="rounded-full border"
                src={user}
                alt="user"
                height={30}
                width={30}
              />
              <p className="text-sm">Tracey Wilson - August 20, 2022</p>
            </div>
          </div>
        </div>

        {/* grid card */}

        <main className="mb-7">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, i) => (
                <Link key={i} href="/single-press">
                  <div className="border border-slate-200 shadow-sm p-4 rounded-lg">
                    <div className="">
                      <Image
                        className=" rounded-md w-full"
                        src={code}
                        height={120}
                        width={150}
                        alt="user"
                      />
                    </div>
                    <div className="space-y-1 pt-3  py-1">
                      <button className="px-4 text-[15px] py-[5px] mb-2 rounded-md bg-primary text-white">
                        Technology
                      </button>
                      <p className="font-bold text-[18px] text-[#181A2A]">
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </p>

                      <div className="flex pt-2 justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Image
                            className="rounded-full border"
                            src={cap}
                            alt="user"
                            height={35}
                            width={35}
                          />
                          <p className="text-[#97989F] text-[17px]">
                            Jason Francisco
                          </p>
                        </div>
                        <p className="text-[#97989F] text-[15px]">
                          August 20, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Press;
