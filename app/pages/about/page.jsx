"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/app/common/Button/Button";
import Textlink from "../../common/Button/Textlink";
import Testimonials from "@/app/component/Testimonials/page";
import Image from "next/image";

function page() {
  return (
    <>
      <section className="text-white body-font overflow-hidden">
        <div className="container py-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
            {/*  <p className="text-sm uppercase font-semibold">
                Who we work with ?
  </p>  */}

              <h2 className="text-4xl font-bold  tracking-widest">
                WHO ARE WE ?
              </h2>
              <p className="leading-relaxed mb-4">
                At Elevate Clicks, our purpose is crystal clear : we exist to be
                your guiding light in the ever-shifting digital landscape.
              </p>
              <p className="text-justify  mb-4">
                Our team comprises experienced professionals with a deep
                understanding of all facets of digital marketing, from SEO and
                SEM to social media, content marketing, and beyond. We stay
                ahead of industry trends to keep your business at the forefront.
              </p>
              <p className="leading-relaxed mb-4">
                We dont believe in one-size-fits-all strategies. Every business
                is unique, and so are its goals. We craft custom-tailored
                marketing solutions to address your specific needs and
                objectives.
              </p>
              <p className="text-justify  mb-4">
                Our decisions are fueled by data. We utilize advanced analytics
                and tracking tools to monitor performance, identify
                opportunities, and optimize campaigns for maximum ROI.
              </p>
              <p className="text-justify  mb-4">
                We believe in open and honest communication. Youll have full
                visibility into our processes and results, ensuring youre always
                informed about the progress of your digital marketing
                initiatives.
              </p>
              <p className="text-justify  mb-4">
                Your success is at the heart of everything we do. We are
                dedicated to building lasting relationships with our clients,
                ensuring your satisfaction is our ultimate priority.
              </p>
           {/*   <Textlink
                text={"Learn more"}
                href={"/"}
                className={"font-bold"}
/>   */}
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
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/about.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-5xl title-font font-bold text-white mb-4">
            Our value/moral/mission
            </h1>
            <p className=" leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white text-lg">
            A technology company is a business that focuses on the development and implementation of technology-based products and services. These companies often employ engineers, scientists, and other specialists dedicated to researching, designing, and creating new technologies.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full  inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <Image src="/services/mission.png" alt="" />

              </div>
              <div className="flex-grow">
                <h2 className=" text-3xl title-font font-semibold text-white mb-3">
                  Mission
                </h2>
                <p className="leading-relaxed  text-white text-lg">
                These companies often employ engineers, scientists, and other specialists dedicated to researching, designing, and creating new technologies. They may also specialize in software development, data storage and processing, networking, or other highly advanced technology-related fields. 
                </p>
              </div>
              
             {/* <Textlink
                text={"Learn more"}
                href={"/"}
                className={"font-bold"}
            />   */}
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
              <Image src="/services/idea.png" alt="" />

              </div>
              <div className="flex-grow flex-col items-center">
              <h2 className=" text-3xl title-font font-semibold text-white mb-3">
                  Vision
                </h2>
                <p className="leading-relaxed  text-white text-lg">
                A good vision paints a picture of a desired future state. It appeals to the heart inspiring employees, customers, and other stakeholders to do their best. A good vision rarely changes, remaining constant through different leaders, economic circumstances, and challenges.
                </p>
               
              </div>
              {/* <Textlink
                text={"Learn more"}
                href={"/"}
                className={"font-bold"}
            />   */}
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 p-3  bg-white flex-shrink-0">
                <Image src="/services/vission.png" alt="" />
              </div>
              <div className="flex-grow">
              <h2 className=" text-3xl title-font font-semibold text-white mb-3">
                  Moral
                </h2>
                <p className="leading-relaxed  text-white text-lg">
                We believe in quality craftsmanship without the gimmicks. We work with the best to get the best. And then we sell the best, for exactly the price it should cost. It’s the very simple system at the heart of everything we make.
                </p>
              </div>
              
              {/* <Textlink
                text={"Learn more"}
                href={"/"}
                className={"font-bold"}
            />   */}
            </div>

          </div>
        </div>
      </section>
{/* Testimonials */}
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
                I&apos;ve had the pleasure of working with Elevate Clicks for this year&apos;s, and I must say, the results have been nothing short of phenomenal. From the initial consultation to the execution of our marketing campaigns, their dedication and expertise have exceeded our expectations.

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
                The team at Elevate Clicks demonstrated a deep understanding of our industry and target audience. Their tailored approach to our marketing strategy significantly improved our online visibility, resulting in a notable increase in website traffic and lead generation. 
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
                Elevate Clicks is more than a marketing service provider; they are a reliable partner committed to our success. I wholeheartedly recommend their services to anyone seeking to elevate their brand and achieve real, measurable results.
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


      <section className="text-white body-font my-[3rem]">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col items-center text-center w-full mb-12 gap-3">
            <h2 className="text-4xl font-bold  tracking-widest">
                SOUNDS LIKE WE’RE A PERFECT FIT ?
              </h2>
              <p className="leading-relaxed mb-4">
                At Elevate Clicks, were more than just a digital marketing agency; were your growth partners.<br/> Our unwavering commitment to your success sets us apart.
              </p>
              <p className="leading-relaxed mb-4">
                Discover how our expertise aligns seamlessly with your business goals. <br/>
                If youre seeking tailored solutions and exceptional results, were the perfect fit. <br/>
                Contact us today to start a conversation that could transform your businesss digital journey.
              </p>
            <Textlink text={"Work With Us!"} href={"/pages/Contact"} className={"font-bold"} />

          </div>
        </div>
      </section>
    </>
  );
}

export default page;
