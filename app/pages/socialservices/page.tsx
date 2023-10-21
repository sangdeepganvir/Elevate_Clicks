"use client";
import React from "react";
import { motion } from "framer-motion";
import Testimonials from "@/app/component/Testimonials/page";
import Button from "@/app/common/Button/Button";
import Textlink from "../../common/Button/Textlink"
import Image from "next/image";

function Socialmedia() {
  return (
    <div>
        <section className="text-white body-font overflow-hidden">
        <div className="container px-5 pb-12 pt-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <h2 className="text-4xl font-bold  tracking-widest">
               BOOST YOUR BRAND WITH OUR SOCIAL MEDIA MASTERY
              </h2>
              <p className="text-justify mb-4 text-lg">Unlock the full potential of your brand with our Social Media Management Service, We craft engaging content, build meaningful connections, and drive results. Elevate your online presence today!
              </p>
            {/* <Textlink text={"Contact Us!"} href={"/pages/Contact"} className={"font-bold"} /> */}

            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center"
            >
              <Image
                className="w-full lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/socialone.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="md:w-[80%] mx-auto body-font">
  <div className="container px-5 py-24 mx-auto">
  <div className="lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 text-center md:w-[80%] mx-auto">
              <h2 className="text-4xl font-bold ">
              SOCIAL MEDIA MARKETING AT YOUR SERVICE
              </h2>
              <p className="text-justify mb-4 text-lg">Social media platforms are diverse, and each has its own unique audience and best practices. A professional service has the expertise to navigate these intricacies and optimize your presence on each platform.
              </p>
            </div>

    <div className="flex flex-wrap -m-4">
      <div className="lg:w-2/4 md:w-1/2 p-2">
        <div className="border p-4 rounded-lg">
          <Image className="h-[100px] w-[100px] rounded object-cover object-center mb-6" src="/services/social-three.png" alt="content" />
          <h2 className="text-2xl  font-bold title-font mb-4">PROFILE SETUP AND OPTIMIZATION:</h2>
          <p className="text-lg">- Creating and enhancing social media profiles.<br/>
           - Consistent branding and messaging.
</p>
        </div>
      </div>
      <div className="lg:w-2/4 md:w-1/2  p-2">
        <div className="border p-4 rounded-lg">
          <Image className="h-[100px] w-[100px] rounded object-cover object-center mb-6" src="/services/social-three.png" alt="content" />
          <h2 className="text-2xl  font-bold title-font mb-4">CONTENT POSTING AND SCHEDULING:
</h2>
          <p className="text-lg">- Regular updates to maintain audience engagement. <br/>
          - Strategic scheduling for maximum reach.
</p>
        </div>
      </div>
    </div>
  </div>
        </section>

        {/* //about */}
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <h2 className="text-4xl font-bold my-4">
              WHY YOU NEED A SOCIAL MEDIA MANAGER ?
              </h2>
              <p className="text-justify mb-4 text-lg">&#8226; Social media isn’t your thing.
Hand it over to those who are trained in the industry so you can focus on other areas of your business !
              &#8226; You don’t have the time on your hands.
if you simply don’t have time for social media thing hand it over to experts who can help you out to be visible on social media platforms
              
              &#8226; You need to improve social media engagement
Social media manager are trained and make sure to increase the rate of engagement with your audience.

              </p>
              <p className="text-justify mb-4 text-lg">&#8226; You need a clear strategy to be created
Planning and organizing your content to ensure you get the highest engagement is one of our main rules.
              </p>

            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center"
            >
              <Image
                className="w-full lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/social-two.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="text-white body-font overflow-hidden">
        <div className="container py-12 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center"
            >
              <Image
                className="w-full lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/paidads-one.png"
                alt="About Image"
              />
            </motion.div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">

              <h2 className="text-4xl font-bold ">
              THE EASIEST WAY TO MANAGE YOUR BRANDS ON SOCIAL MEDIA
              </h2>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004;Consistent Posting: Regular, scheduled content keeps your audience engaged.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004; Audience Analysis: Understanding your audiences preferences informs content strategies.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004; Trend Awareness: Stay updated on platform trends for relevance.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                &#10004;Content Variety: Mix text, images, videos, and stories for diverse content.
              </p>
            {/* <Textlink text={"Book a Demo"} href={"/pages/Contact"} className={"font-bold"} /> */}

            </div>

          </div>
        </div>
      </section>
      
      <div>
        <section className=" 600 body-font my-[3rem]">
        <div className="container px-5 py-24 mx-auto bg-white bg-opacity-10 ">
          <div className="flex flex-col text-center w-full mb-20">
            {/* <p className="text-sm uppercase">WORK WITH US</p> */}
            <h2 className="sm:text-3xl text-4xl  font-bold title-font mb-4 uppercase ">
              Check our best clients & partners
            </h2>
          </div>
          <div className="flex flex-wrap -m-6 md:w-[85%] mx-auto">
            <div className="p-4 md:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <div className="h-full bg-white text-black  p-10 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-black mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="text-justify  mb-6 text-lg">
                Elevate Clicks has transformed our social media presence. Their strategic approach has significantly boosted our engagement and brand reach.
                </p>
                <a className="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src="/services/download.jpg"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium">
                      Holden Caulfield
                    </span>
                    <span className="text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <div className="h-full bg-white text-black  p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-black mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="text-justify  mb-6">
                Impressed by Elevate Clicks social media expertise. Our brand&apos;s profiles are more active, and we&apos;re gaining a substantial following. Great job.
                </p>
                <a className="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src="/services/feedback2.jpg"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium">
                      KANE JOHNSON
                    </span>
                    <span className="text-sm">BUSINESS LEAD</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="p-4 md:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <div className="h-full bg-white text-black  p-10 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-black mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="text-justify  mb-6 text-lg">
                Elevate Clicks social media team knows how to keep our audience engaged. Our posts are now more interactive, resulting in increased user participation.
                </p>
                <a className="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src="/services/download.jpg"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium">
                      James Faulkner
                    </span>
                    <span className="text-sm">Frontend DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    </div>
  )
}

export default Socialmedia