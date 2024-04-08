import React from "react";
import Image from "next/image";
import logo from "./../../assets/images/whitelogo.png";
import google from "../../assets/images/googleplay.png";
import app from "../../assets/images/appstore.png";
import linkedin from "../../assets/images/LinkedIn Logomark.png";
import facebook from "../../assets/images/Logomark.png";
import youtube from "../../assets/images/YouTube Logomark.png";
import twitter from "../../assets/images/Twitter Logomark.png";
import instagram from "../../assets/images/Instagram Logomark.png";
import stripe from "../../assets/images/stripe.png";
import visa from "../../assets/images/visa.png";
import america from "../../assets/images/american.png";
import payoneer from "../../assets/images/payoneer.png";
import mastercard from "../../assets/images/master.png";
import { FaAngleRight, FaRegCopyright } from "react-icons/fa6";

import Link from "next/link";
import Container from "./Container";

const FooterTwo = () => {
  return (
    <div className="bg-[#000000]">
      <Container>
        <div className="grid py-4 grid-cols-2 text-white md:grid-cols-3 lg:grid-cols-7 gap-5">
          <div className="col-span-2">
            <div className="pb-5 flex  gap-1 items-center">
              <div className="">
                <Image
                  className="mx-auto "
                  src={logo}
                  height={18}
                  width={40}
                  alt="logo"
                />
              </div>
            </div>

            <p className="w-full md:w-full lg:w-[290px]">
              Lorem ipsum dolor sit amet consectetur. Vitae proin eleifend risus
              turpis et dignissim etiam. Eget semper pellentesque sed eget.Lorem
              ipsum dolor sit amet consectetur. Vitae proin eleifend risus
              turpis et dignissim etiam. Eget semper pellentesque sed eget.Vitae
              proin eleifend risus turpis et dignissim etiam.
            </p>
          </div>

          <div className="flex flex-wrap justify-between col-span-3">
            {/* links */}
            <div>
              <h3 className="font-bold">links</h3>
              <div className="mt-5 lg:mt-10">
                <ul className="flex flex-col space-y-2">
                  <li className="flex flex-col gap-2 ">
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/refund-policy">Refund Policy</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* services */}

            <div>
              <h3 className="font-bold">Services</h3>
              <div className="mt-5 lg:mt-10">
                <ul className="flex flex-col space-y-2">
                  {[1, 2, 3, 4, 5, 6].map((link, idx) => (
                    <li key={idx} className="flex gap-2 items-center">
                      <FaAngleRight /> Services {idx + 1}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* service two */}
            <div>
              <h3 className="font-bold">Services</h3>
              <div className="mt-5 lg:mt-10">
                <ul className="flex flex-col space-y-2">
                  {[1, 2, 3, 4, 5, 6].map((link, idx) => (
                    <li key={idx} className="flex gap-2 items-center">
                      <FaAngleRight /> Services {idx + 1}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-2 lg:mx-auto">
            <div>
              <h3 className="font-bold">Connect with</h3>
              <div className="mt-5 lg:mt-10">
                <div className="flex flex-row gap-x-4 lg:gap-x-0 lg:flex-col flew-wrap gap-y-2 cursor-pointer">
                  <Link href="">
                    <Image
                      src={google}
                      height={50}
                      width={150}
                      alt="google Play store"
                    />
                  </Link>
                  <Link href="">
                    <Image
                      src={app}
                      height={50}
                      width={150}
                      alt="google Play store"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-3 lg:mt-6">
              <h3 className="font-semibold">Social Media</h3>

              <div className="my-3">
                <ul className="flex flex-wrap gap-2 lg:gap-4 items-center">
                  {/* linkedin */}

                  <a className="" href="">
                    <li className="h-8 w-8 rounded-full bg-white ">
                      <Image
                        className="mx-auto pt-[7px] rounded-md"
                        src={linkedin}
                        height={15}
                        width={19}
                        alt="linkedin"
                      />
                    </li>
                  </a>

                  {/* facebook */}
                  <a className="" href="">
                    <li className="h-8 w-8 rounded-full bg-white ">
                      <Image
                        className="mx-auto pt-[7px] rounded-md"
                        src={facebook}
                        height={10}
                        width={12}
                        alt="facebook"
                      />
                    </li>
                  </a>

                  {/* twitter */}
                  <a className="" href="">
                    <li className="h-8 w-8 rounded-full bg-white ">
                      <Image
                        className="mx-auto pt-[10px] rounded-md"
                        src={twitter}
                        height={10}
                        width={20}
                        alt="twitter"
                      />
                    </li>
                  </a>

                  {/* instagram */}
                  <a className="" href="">
                    <li className="h-8 w-8 rounded-full bg-white ">
                      <Image
                        className="mx-auto pt-[6px] rounded-md"
                        src={instagram}
                        height={10}
                        width={20}
                        alt="instagram"
                      />
                    </li>
                  </a>
                  {/* youtube */}
                  <a className="" href="">
                    <li className="h-8 w-8 rounded-full bg-white ">
                      <Image
                        className="mx-auto pt-[8px] rounded-md"
                        src={youtube}
                        height={10}
                        width={21}
                        alt="youtube"
                      />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-[#FFD0B1] cursor-pointer">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center">
            <div>
              <h3 className="flex items-center gap-1 text-dark font-bold">
                <FaRegCopyright className="text-xl text-dark" /> 2024 eProfiles
              </h3>
            </div>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Image src={visa} height={30} width={55} alt="visa" />
              <Image src={mastercard} height={30} width={40} alt="mastercard" />
              <Image src={america} height={30} width={55} alt="american" />
              <Image src={payoneer} height={30} width={55} alt="payoneer" />
              <Image src={stripe} height={30} width={55} alt="stripe" />
            </div>
            <div className="flex flex-wrap lg:justify-center text-left items-center mx-auto gap-3">
              <Link href="/terms-conditions">
                {" "}
                <h3 className="text-dark font-bold">Terms & conditions</h3>
              </Link>
              <Link href="/privacy-policy">
                {" "}
                <h3 className="text-dark font-bold">Private Policy</h3>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FooterTwo;
