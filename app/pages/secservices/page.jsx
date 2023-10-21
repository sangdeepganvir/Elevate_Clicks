"use client";
import React from "react";
import { motion } from "framer-motion";
import Testimonials from "@/app/component/Testimonials/page";
import Textlink from "../../common/Button/Textlink"
import Image from "next/image";

function Seoservices() {
  return (
    <div>
    {/* first sction */}
    <section className="text-white body-font overflow-hidden">
      <div className="container px-5 pb-12 pt-24 mx-auto ">
        <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
            <h2 className="text-4xl font-bold ">
              ACHIEVE TOP SEARCH RANKINGS WITH OUR SEO SERVICES
            </h2>
            <p className=" text-justify mb-4 text-lg">
               Boost your online visibility and drive organic traffic with our top-notch SEO service. Our experts will optimize your website for search engines, ensuring you reach your target audience and outshine the competition. Take your digital presence to new heights today!
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
              className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
              src="/services/paidads-one.png"
              alt="About Image"
            />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="text-white body-font overflow-hidden">
      <div className="container px-5 pb-12 mx-auto ">
        <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 ">
            <h2 className="text-4xl font-bold ">
             DRIVE TARGETED TRAFFIC AND BOOST CONVERSIONS
            </h2>
            <p className=" text-justify mb-4 text-lg">
              With Elevate Clicks cutting-edge SEO techniques and industry knowledge, businesses can expect to climb the search engine rankings and attract targeted organic traffic. Our team of experienced professionals understands the ever-evolving algorithms and trends, ensuring that your website remains optimized for maximum visibility.
            </p>
            {/* <Textlink text={"Book a Demo"} href={"/pages/Contact"} className={"font-bold"} /> */}

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
              src="/services/paid-one.png"
              alt="About Image"
            />
          </motion.div>
        </div>
      </div>
    </section>

  {/*
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto bg-white bg-opacity-10">
        <div className="lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 text-center md:w-[80%] mx-auto">
          <p className="text-sm uppercase">WORK WITH US</p>
          <h2 className="text-4xl font-bold ">
            Achieve top search rankings with our seo services
          </h2>
          <p className="leading-relaxed mb-4 text-lg">
            Whether you’re a startup looking for that extra kick or an
            established retailer in need of a fresh perspective, we are here
            to take your digital commerce to the next level.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 w-[70%] mx-auto">
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center ">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                src="/services/paidads-one.png"
              />
              <div className="w-full">
                <h2 className="text-lg font-bold">Alper Kamu</h2>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center ">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                src="/services/paidads-one.png"
              />
              <div className="w-full">
                <h2 className="text-lg font-bold">Alper Kamu</h2>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center ">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                src="/services/paidads-one.png"
              />
              <div className="w-full">
                <h2 className="text-lg font-bold">Alper Kamu</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex -m-4 w-[70%] mx-auto">
          <div className="p-4 lg:w-1/2 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center ">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                src="/services/paidads-one.png"
              />
              <div className="w-full">
                <h2 className="text-lg font-bold">Alper Kamu</h2>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center ">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                src="/services/paidads-one.png"
              />
              <div className="w-full">
                <h2 className="text-lg font-bold">Alper Kamu</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  */ }

    {/* last section */}
    <section class="text-white body-font overflow-hidden">
      <div class="container pb-12 pt-24 mx-auto ">
        <div class="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
            {/* <p className="text-sm uppercase">Who we work with ?</p> */}
            <h2 class="text-4xl font-bold ">
              CUSTOMIZED SOLUTIONS TO YOUR BUSINESS GOALS
            </h2>
          </div>
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex justify-center ">
            <p className="text-lg">
              From keyword research and on-page optimization to link building and content creation, our comprehensive approach guarantees long-term success and lasting impact with proven SEO techniques
            </p>

          </div>
        </div>
      </div>
    </section>
    <section class="text-white body-font overflow-hidden">
      <div class="container pb-12 mx-auto ">
        <div class="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
          
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
            <div className="mt-[2rem] flex flex-col gap-4">
              <div className="flex justify-between items-center w-[60%] hover:w-[70%] transition duration-500">
                <p className="text-lg font-bold">OFF-PAGE OPTIMIZATION</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="20"
                  viewBox="0 0 41 24"
                  fill="none"
                >
                  <path
                    d="M28.8965 0.956055L27.014 2.87052L35.0007 10.9928H0.287109V10.9929V13.7003V13.7004H35.0005L27.014 21.8225L28.8965 23.7369L40.097 12.3465L28.8965 0.956055Z"
                    fill="white"
                  />
                </svg>
              </div>
              <hr className="py-[2px] w-[90%]" />
            </div>
            <div className="mt-[2rem] flex flex-col gap-4">
              <div className="flex justify-between items-center w-[60%] hover:w-[70%] transition duration-500">
                <p className="text-lg font-bold">ON-PAGE OPTIMIZATION</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="20"
                  viewBox="0 0 41 24"
                  fill="none"
                >
                  <path
                    d="M28.8965 0.956055L27.014 2.87052L35.0007 10.9928H0.287109V10.9929V13.7003V13.7004H35.0005L27.014 21.8225L28.8965 23.7369L40.097 12.3465L28.8965 0.956055Z"
                    fill="white"
                  />
                </svg>
              </div>
              <hr className="py-[2px] w-[90%]" />
            </div>
            <div className="mt-[2rem] flex flex-col gap-4">
              <div className="flex justify-between items-center w-[60%] hover:w-[70%] transition duration-500">
                <p className="text-lg font-bold">KEYWORD RESEARCH</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="20"
                  viewBox="0 0 41 24"
                  fill="none"
                >
                  <path
                    d="M28.8965 0.956055L27.014 2.87052L35.0007 10.9928H0.287109V10.9929V13.7003V13.7004H35.0005L27.014 21.8225L28.8965 23.7369L40.097 12.3465L28.8965 0.956055Z"
                    fill="white"
                  />
                </svg>
              </div>
              <hr className="py-[2px] w-[90%]" />
            </div>
            <div className="mt-[2rem] flex flex-col gap-4">
              <div className="flex justify-between items-center w-[60%] hover:w-[70%] transition duration-500">
                <p className="text-lg font-bold">SEO AUDITS AND REPORTING</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="20"
                  viewBox="0 0 41 24"
                  fill="none"
                >
                  <path
                    d="M28.8965 0.956055L27.014 2.87052L35.0007 10.9928H0.287109V10.9929V13.7003V13.7004H35.0005L27.014 21.8225L28.8965 23.7369L40.097 12.3465L28.8965 0.956055Z"
                    fill="white"
                  />
                </svg>
              </div>
              <hr className="py-[2px] w-[90%]" />

            </div>
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
            className="flex items-center pt-4"
          >
            <Image
              className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] lg:mt-0"
              src="/services/seotwo.png"
              alt="About Image"
            />
          </motion.div>
        </div>
      </div>
    </section>

    <div>
        <section class=" 600 body-font my-[3rem]">
        <div class="container px-5 py-24 mx-auto bg-white bg-opacity-10 ">
          <div class="flex flex-col text-center w-full mb-20">
            {/* <p className="text-sm uppercase">WORK WITH US</p> */}
            <h2 class="sm:text-3xl text-4xl  font-bold title-font mb-4 uppercase ">
              Check our best clients & partners
            </h2>
          </div>
          <div class="flex flex-wrap -m-6 md:w-[85%] mx-auto">
            <div class="p-4 md:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <div class="h-full bg-white text-black  p-10 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-black mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="text-justify  mb-6 text-lg">
                Impressive SEO work by Elevate Clicks! Our website&apos;s visibility has skyrocketed, leading to a noticeable increase in organic traffic and higher conversions.</p>
                <a class="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src="/services/download.jpg"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium">
                      Holden Caulfield
                    </span>
                    <span class="text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <div class="h-full bg-white text-black  p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-black mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="text-justify  mb-6">
                Seeing a substantial rise in our website&apos;s organic reach, all thanks to the well-executed SEO plan. We&apos;re now reaching our target audience more effectively.
                </p>
                <a class="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src="/services/feedback2.jpg"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium">
                      KANE JOHNSON
                    </span>
                    <span class="text-sm">BUSINESS LEAD</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  </div>
  );
}

export default Seoservices;
