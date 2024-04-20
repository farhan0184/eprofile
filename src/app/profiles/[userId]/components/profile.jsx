"use client"
import { GoVerified } from "react-icons/go";
import Image from "next/image";
import Ratings from "@/Components/Ratings/Ratings";

import { GoLink } from "react-icons/go";





import { useState, useEffect } from 'react'
import { axiosBase } from '@/hooks/axiosSecure'
import { softronixs, project1, facebook, linkedin, youtube, x, amazon, pinterest, reddit, tumblr, vk, github } from "@/assets/images";


const SingleProfile = ({ userId }) => {
  const [profile, setProfile] = useState({})
  useEffect(() => {
    const fetchData = () => {

      axiosBase.get(`/profile/${userId}`).then((res) => {
        setProfile(res?.data?.data)
      })
    }
    fetchData()
  }, [])
  console.log(profile);
  return (
    <div>
      <div>
        <div className="px-6 border-b-2 relative md:px-14 lg:px-20 py-4 md:py-5 lg:py-7">
          <div
            className="bg-cover relative w-full bg-center h-[150px] md:h-[190px] lg:h-[220px] rounded-lg"
            style={{
              backgroundImage: `url(${profile?.coverImage})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div className=" flex flex-col lg:flex-row flex-wrap lg:pl-8 gap-3 lg:gap-5">
            <div className=" lg:w-[12%]  ">
              <Image
                className="border-2 relative bottom-16 left-[30%] md:left-[40%] lg:left-0  shadow-md border-slate-300 rounded-full h-[120px] md:h-[130px] lg:h-[140px] w-[120px] md:w-[130px]  lg:w-[140px]"
                src={profile?.photo}
                height={80}
                width={120}
                alt="logo"
              />
            </div>

            <div className="space-y-2 relative bottom-14  lg:bottom-0 w-[86%]  lg:mt-6">
              <div className="flex  justify-between items-center">
                <div className="flex items-center gap-2 lg:gap-4">
                  <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                    Mr. John
                  </h2>
                  <span>
                    <GoVerified className="text-xl text-[#00A1FF]" />
                  </span>
                </div>

                <div className="flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <Image
                      className="  w-[80px]"
                      src={softronixs}
                      height={80}
                      width={120}
                      alt="logo"
                    />
                    <h3 className="font-semibold text-[#000000] text-right text-[18px] lg:text-[21px]">
                      Softronixs system Ltd
                    </h3>
                  </div>
                  <h3 className="font-semibold text-right text-[#000000] text-[18px] lg:text-[21px]">
                    City University of New York
                  </h3>
                </div>
              </div>

              <p className="text-slate-700 font-normal text-[20px]">
                Software Engineer
              </p>
              <div className="flex gap-3 items-center">
                <div className="flex gap-1 items-center">
                  <Ratings ratings={5} />
                </div>
                <p className="text-slate-700 font-normal text-[18px]">
                  19 reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="width">
        <div className="max-w-6xl h-full border border-[#000000] px-4 py-2 mx-auto">
          {/* objective */}
          <div className="space-y-2 mb-4 lg:mb-6 md:mb-5">
            <h3 className="font-semibold border-b-2 pb-1 inline-block border-[#FF6702] text-[19px] tracking-wide text-[#FF6702]">
              Objective
            </h3>
            <p className="text-[17px] tracking-wide text-justify">
              Lorem ipsum dolor sit amet consectetur. Ipsum sed in condimentum
              dui senectus tortor et. Tristique viverra in accumsan lobortis
              euismod faucibus. Nunc lorem id aliquet nibh condimentum netus
              ornare quis. Amet est risus integer lectus aliquam gravida
              bibendum dui. Volutpat vitae risus blandit phasellus congue tellus
              et commodo. Dolor at in euismod nunc magna. Nec ut risus elementum
              lectus in. Accumsan nunc dictum vel aliquam magnis. Sem quis at
              eget consectetur in sed sit amet. Aliquet vivamus semper imperdiet
              eget.
            </p>
            <span className="text-[#FF6702] font-bold ">Read more..</span>
          </div>

          {/* Education */}
          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <h3 className="font-semibold border-b-2 pb-1 inline-block border-[#FF6702] text-[19px] tracking-wide text-[#FF6702]">
              Education
            </h3>
            <div className="space-y-1 flex flex-col">
              <span>January 2017 - December 2021</span>
              <span>
                <b>City University of New York </b>, Computer Science
              </span>
              <span>
                CGPA: <b>3.85</b>
              </span>
              <span>January 2017 - December 2021</span>
              <span>
                <b>City University of New York</b> , Software Engineer
              </span>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <h3 className="font-semibold border-b-2 pb-1 inline-block border-[#FF6702] text-[19px] tracking-wide text-[#FF6702]">
              Work Experience
            </h3>
            <h3>20-09-2023 - Present</h3>
            <h3>
              <b>Softronixs system Ltd. </b>, (UI-UX Designer)
            </h3>
            <p>
              As a  UI/UX designer, my responsibilities encompass creating
              seamless and <br /> delightful digital experiences. Here are key
              aspects of my role:
            </p>
            <ul className="space-y-1 list-disc ml-5 flex flex-col">
              <li>Gathering User Requirements</li>

              <li>Design Strategy</li>
              <li>Visual Design Solutions</li>
              <li>UI Element Design</li>
              <li>Testing and Iteration</li>
              <li>Collaboration</li>
              <li>UX Research and Guidance</li>
              <li>Adherence to Style Standards</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <h3 className="font-semibold border-b-2 pb-1 inline-block border-[#FF6702] text-[19px] tracking-wide text-[#FF6702]">
              Education
            </h3>
            <div className="space-y-1 flex flex-col">
              <span>
                <b>Technical Skills</b>
              </span>
              <span>
                Programming languages (Good), Software tools (Good), Machinery
                operation (Good).
              </span>
              <span>
                <b>Soft Skills</b>
              </span>
              <span>
                Communication (Good), Teamwork (Good), Problem-solving (Good).
              </span>
              <span>
                <b>Industry Certifications or Licenses</b>
              </span>
              <span>Creative design (Good).</span>
            </div>
          </div>

          {/* Professional Memberships or Affiliations */}
          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <h3 className="font-semibold border-b-2 pb-1 inline-block border-[#FF6702] text-[19px] tracking-wide text-[#FF6702]">
              Professional Memberships or Affiliations
            </h3>
            <div className="space-y-1 flex flex-col">
              <span>Jan 2014 - Feb 2014</span>
              <span>
                <b>TOPCV-EDUCATION TALK 2014, </b>Member of US Ambassador
              </span>
              <ul className="space-y-1 list-disc ml-5 flex flex-col">
                <li>Organize monthly events, network with US alumni</li>

                <li>
                  Share how to hunt scholarships and US student's life
                  experiences to all students who have received offers from US
                  universities
                </li>
              </ul>
            </div>
          </div>

          {/* Language */}
          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <h3 className="font-semibold border-b-2 pb-1 inline-block border-[#FF6702] text-[19px] tracking-wide text-[#FF6702]">
              Languages
            </h3>
            <div className="space-y-1 flex flex-col">
              <span>Bangla (Good), English (Good).</span>
            </div>
          </div>

          {/*Volunteer Work or Community Involvement*/}
          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <h3 className="font-semibold border-b-2 pb-1 inline-block border-[#FF6702] text-[19px] tracking-wide text-[#FF6702]">
              Volunteer Work or Community Involvement
            </h3>
            <div className="space-y-1 flex flex-col">
              <span>Jan 2014 - Feb 2014</span>
              <span>
                <b>TOPCV-EDUCATION TALK 2014, </b>Member of US Ambassador
              </span>
              <ul className="space-y-1 list-disc ml-5 flex flex-col">
                <li>Organize monthly events, network with US alumni</li>

                <li>
                  Share how to hunt scholarships and US student's life
                  experiences to all students who have received offers from US
                  universities
                </li>
              </ul>
            </div>
          </div>

          {/*Projects or Portfolio (if applicable)*/}
          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <h3 className="font-semibold border-b-2 pb-1 inline-block border-[#FF6702] text-[19px] tracking-wide text-[#FF6702]">
              Projects or Portfolio (if applicable)
            </h3>
            <div className="space-y-2 flex flex-col">
              <div className="flex gap-2">
                <span>
                  <b>Project name:</b>
                </span>
                <span>UI/UX design</span>
              </div>
              <div className="flex gap-2">
                <span>
                  <b>Link:</b>
                </span>
                <span>www.yourproject.com</span>
              </div>
              <div className="flex gap-2">
                <span>
                  <b>Project Description:</b>
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br /> Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="flex gap-2">
                <span>
                  <b>Projects or Portfolio (if applicable):</b>
                </span>
                <span>www.yourproject.com</span>
              </div>
            </div>
          </div>
          {/*Projects Image*/}
          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <div className="flex flex-wrap gap-4">
              <Image
                className=""
                src={project1}
                height={50}
                width={90}
                alt="project"
              />
              <Image
                className=""
                src={project1}
                height={50}
                width={90}
                alt="project"
              />
              <Image
                className=""
                src={project1}
                height={50}
                width={90}
                alt="project"
              />
              <Image
                className=""
                src={project1}
                height={50}
                width={90}
                alt="project"
              />
            </div>
          </div>

          {/* Projects or Portfolio (if applicable) */}
          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <h3 className="font-semibold border-b-2 pb-1 inline-block border-[#FF6702] text-[19px] tracking-wide text-[#FF6702]">
              Projects or Portfolio (if applicable)
            </h3>
            <div className="space-y-1 flex flex-col">
              <span>
                Any articles, papers, books, or presentations the individual has
                authored or contributed to.
              </span>
            </div>
          </div>

          {/* Testimonials or Recommendations  */}
          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <h3 className="font-semibold border-b-2 pb-1 inline-block border-[#FF6702] text-[19px] tracking-wide text-[#FF6702]">
              Testimonials or Recommendations
            </h3>
            <div className="space-y-1 flex flex-col">
              <span>
                Quotes from colleagues, supervisors, or clients endorsing the
                individual's skills and work ethic.
              </span>
            </div>
          </div>

          {/* Personal Interests or Hobbies (optional) */}
          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <h3 className="font-semibold border-b-2 pb-1 inline-block border-[#FF6702] text-[19px] tracking-wide text-[#FF6702]">
              Personal Interests or Hobbies (optional)
            </h3>
            <div className="space-y-1 flex flex-col">
              <span>
                A brief mention of the individual's personal interests or
                hobbies, which can provide a <br /> glimpse into their
                personality outside of work.
              </span>
            </div>
          </div>

          {/* Career Goals or Aspirations */}
          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <h3 className="font-semibold border-b-2 pb-1 inline-block border-[#FF6702] text-[19px] tracking-wide text-[#FF6702]">
              Career Goals or Aspirations
            </h3>
            <div className="space-y-1 flex flex-col">
              <span>
                A statement about the individual's future career ambitions, such
                as seeking new <br /> challenges, advancing in their field, or
                contributing to a specific cause.
              </span>
            </div>
          </div>

          {/*Contact*/}
          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <h3 className="font-semibold border-b-2 pb-1 inline-block border-[#FF6702] text-[19px] tracking-wide text-[#FF6702]">
              Contact
            </h3>
            <div className="space-y-2 flex flex-col">
              <div className="flex gap-8">
                <span>
                  <b>Address:</b>
                </span>
                <span>
                  <b>Khulna, Bangladesh</b>
                </span>
              </div>
              <div className="flex gap-10">
                <span>
                  <b>Mobile:</b>
                </span>
                <span>
                  <b>+8801700-000000</b>
                </span>
              </div>
              <div className="flex gap-10">
                <span>
                  <b>Email:</b>
                </span>
                <p>
                  <b>eprofiles@gmail.com</b>
                </p>
              </div>
            </div>
          </div>

          {/* social */}

          <div className="space-y-2  mb-4 lg:mb-6 md:mb-5">
            <div className=" py-5">
              <h3 className="flex  text-[#000000] text-[18px] items-center gap-2">
                <GoLink className="text-primary text-xl font-normal" />
                Social links
              </h3>

              <div className="grid mt-5 grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
                  <Image
                    className=""
                    src={facebook}
                    height={70}
                    width={110}
                    alt="facebook"
                  />
                </div>

                <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lgh-[79px] lg:h-[85px] shadow-red-300/45">
                  <Image
                    className=""
                    src={linkedin}
                    height={70}
                    width={110}
                    alt="linkedin"
                  />
                </div>

                <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
                  <Image
                    className=""
                    src={youtube}
                    height={70}
                    width={100}
                    alt="youtube"
                  />
                </div>

                <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
                  <Image className="" src={x} height={70} width={60} alt="x" />
                </div>

                <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px]shadow-red-300/45">
                  <Image
                    className=""
                    src={amazon}
                    height={70}
                    width={110}
                    alt="amazon"
                  />
                </div>

                <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
                  <Image
                    className=""
                    src={pinterest}
                    height={70}
                    width={100}
                    alt="pinterest"
                  />
                </div>

                <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
                  <Image
                    className=""
                    src={reddit}
                    height={70}
                    width={80}
                    alt="reddit"
                  />
                </div>

                <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
                  <Image
                    className=""
                    src={tumblr}
                    height={70}
                    width={90}
                    alt="tumblr"
                  />
                </div>

                <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px] shadow-red-300/45">
                  <Image
                    className=""
                    src={vk}
                    height={70}
                    width={40}
                    alt="vk"
                  />
                </div>

                <div className="border flex flex-wrap justify-center rounded-lg items-center shadow-lg h-[79px] lg:h-[85px]  shadow-red-300/45">
                  <Image
                    className=""
                    src={github}
                    height={70}
                    width={120}
                    alt="github"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
