"use client";
import React from "react";
import { motion } from "framer-motion";
import Textlink from "../common/Button/Textlink"
import Image from "next/image";
import Brands from "../component/Brand/pages"
import Testimonials from "../component/Testimonials/page"

function homepage() {
  return (
    <>
      <section className="text-white body-font my-[3rem]">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-col items-center text-center w-full mb-12">
            <h1 className="sm:text-5xl text-4xl font-extrabold lg:w-[60%] title-font mb-6">
              We Turn Ideas Into Extraordinary Digital Products & Experiences
            </h1>
            <p className=" text-xl lg:w-2/3 mx-auto leading-relaxed">
              Elevate your online presence with Elevate Clicks.Elevate Clicks is a
              digital marketing agency.We are your strategic partner in helping your business
              reach new heights and achieve exponential growth in the online world.
            </p>
            <Textlink text={"Get in touch"} href={"/pages/Contact"} className={"font-bold text-gray-500"} />
          </div>
        </div>
        <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition-all cursor-pointer={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center"
            >
              <Image
                className="lg:w-[35rem] mx-auto hover:scale-105 transition-all cursor-pointer-all duration-500"
                src="/services/analytics-one.png"
                alt="About Image"
              />
            </motion.div>
      </section>
      {/* //about */}
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5  mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              {/* <p className=" text-lg uppercase">WHO WE WORK WITH?</p> */}
              <h2 className="text-4xl font-bold  ">
                SO WHAT DO WE DO EXACTLY?
              </h2>
              <p className=" text-lg text-justify mb-4">
                Elevate Clicks is a leading digital marketing agency that sspecializes in providing
                comprehensive and tailored services to help businesses thrive in the online world.
             
              
                With our 360-degree approach , we at Elevate Clicks offer a wide range of solutions
                designed to drive growth and maximize online visibility.
                </p>
              
              <p className=" text-lg text-justify mb-4">
                Whether you are a small startup or an established enterprise , Elevate Clicks
                has the expertise and experience to take your business to new heights.
                Our team of skilled professionals understands the ever evolving digital landscape
                and utilizes innovative strategies to ensure your brand stands out from the competition.
              </p>
              <p className=" text-lg text-justify  mb-4">
                From Search Engine Optimization (SEO) and pay-per-click advertising (PPC) to social media management
                ,content creation,and web design , Elevate Clicks covers all aspects of digital marketing.
                We work closely with clients to understand their unique goals and devise
                customized strategies that deliver measurable results.
              </p>
              {/* <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} /> */}

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
              className="flex items-center justify-center mx-auto "
            >
              <Image
                className="w-[30rem] lg:ml-[-2rem] mt-[2rem] lg:mt-0 hover:scale-105 transition-all duration-500 mx-auto"
                src="/homepage/imgone.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">

            {/* <p className=" text-lg uppercase">OUR SERVICES </p> */}
            <h2 className="sm:text-3xl text-4xl  font-bold title-font mb-4 ">
              WE PROVIDE WIDE RANGE OF DIGITAL SERVICES
            </h2>
            <p className=" text-lg lg:w-2/3 mx-auto leading-relaxed">
              Whether you’re a startup looking for that extra kick or an
              established retailer in need of a fresh perspective, we are here
              to take your digital commerce to the next level.
            </p>
          </div>
          <div className="flex flex-wrap  text-center md:w-[90%] mx-auto ">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <a href="../pages/webdevservices" className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[300px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  WEBSITE DEVELOPMENT
                </h2>
                <p className=" text-lg leading-relaxed">
                  We create website that clearly reflects your expertise, story, and values
                </p>
                <Textlink text={"Learn more"} href={"/pages/webdevservices"} className={"font-bold text-gray-500"} />

              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <a href="../pages/secservices" className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[300px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  SEO
                </h2>
                <p className=" text-lg text-justify ">
                  Boost your online visibility and attract organic traffic through our strategic and data-driven SEO techniques.
                </p>
                <Textlink text={"Learn more"} href={"/pages/secservices"} className={"font-bold text-gray-500"} />

              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <a href="../pages/socialservices" className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[300px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  SOCIAL MEDIA MANAGEMENT
                </h2>
                <p className=" text-lg text-justify ">
                  Engage your audience and grow your brands influence through our creative and impactful social media campaigns.
                </p>
                <Textlink text={"Learn more"} href={"/pages/socialservices"} className={"font-bold text-gray-500"} />

              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <a href="../pages/emailservices" className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[300px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  EMAIL MARKETING
                </h2>
                <p className=" text-lg text-justify ">
                  Reach your customers with personalized and engaging email campaigns that nurture relationships and drive conversions.
                </p>
                <Textlink text={"Learn more"} href={"/pages/emailservices"} className={"font-bold"} />
              </a>
            </div>

            <div className="p-4 md:w-1/3 sm:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <a href="../pages/contentservices" className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[300px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  CONTENT MARKETING
                </h2>
                <p className="text-justify ">
                  Tell your brand story effectively and captivate your audience with our compelling and shareable content creation and distribution services.
                </p>
                <Textlink text={"Learn more"} href={"/pages/contentservices"} className={"font-bold text-gray-500"} />

              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full hover:scale-105 transition-all duration-500">
              <a href="../pages/analyst" className="border-2 border-gray-200 px-4 py-6 rounded-lg text-start h-[300px] flex flex-col justify-center gap-3">
                <h2 className="title-font font-bold text-2xl ">
                  Analytical Report
                </h2>
                <p className="text-justify ">
                  Analytical reports are not just data summaries, theyre your compass in the data-driven world. They illuminate your path, helping you navigate the complexities of business with clarity and confidence.
                </p>
                <Textlink text={"Learn more"} href={"/pages/analyst"} className={"font-bold text-gray-500"} />

              </a>
            </div>
          </div>
        </div>
      </section>
      {/* we work with */}
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center mx-auto "
            >
              <Image
                className="w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0 hover:scale-105 transition-all duration-500"
                src="/homepage/imgtwo.png"
                alt="About Image"
              />
            </motion.div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">

              <h2 className="text-4xl font-bold  ">
                BENEFITS TO COLLAB WITH ELEVATE CLICKS
              </h2>
              <p className="text-justify text-lg mb-4">
                a) Strategic discussion : We’ll get you as many quick and early wins as possible, while setting up specific, long-term, scalable digital marketing goals
              </p>
              <p className="text-justify  text-lg mb-4">
                b) Full rollout: We’ll roll out our full execution plan, focusing on timely, tactical implementation, and setting up scalable growth opportunities. This frees you up to work on other high impact areas of your business.
              </p>
              <p className="text-justify  text-lg mb-4">
                c) Business branding : Branding a business brings a tremendous amount of value. Companies with strong brands stand out when customers are deciding where to take their business.
              </p>
              <p className="text-justify  text-lg mb-4">
                d) Transparency: Not only is Elevate Clicks a Digital marketing agency, but we also double as a consulting firm. We believe that guiding our clients to the best marketing platforms and sharing our first-hand experience allows us to create strong relationships while delivering the best product.
              </p>
              {/* <Textlink text={"Learn more"} href={"/pages/Contact"} className={"font-bold text-gray-500"} /> */}

            </div>
          </div>
        </div>
      </section>

      {/* <Brands /> */}

      {/* Portfolio */}
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 sm:w-[80%] mx-auto w-[90%]">
            <div className="p-4 lg:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center justify-start ">
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
                    className="w-[12rem] lg:w-[23rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                    src="/homepage/content.png"
                    alt="About Image"
                  />
                </motion.div>
                <div className="flex-grow sm:pl-8 text-start sm:w-[60%] w-[80%] mx-auto">
                  <h2 className=" font-bold text-xl mb-3"> Website Development</h2>
                  <p className="mb-4  text-justify">
                  Web development encompasses a wide range of services, which include delivering websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, website architectures
                  </p>
            {/* <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} /> */}

                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center justify-start ">
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
                    className="w-[12rem] lg:w-[23rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                    src="/homepage/graphic.png"
                    alt="About Image"
                  />
                </motion.div>
                <div className="flex-grow sm:pl-8 text-start sm:w-[60%] w-[80%] mx-auto">
                  <h2 className=" font-bold text-xl mb-3">Content Strategy</h2>
                  <p className="mb-4  text-justify">
                   
                Content marketing is a marketing strategy used to attract, engage, and retain an audience by creating and sharing relevant articles, videos, podcasts, and other media. 
                  </p>
            {/* <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} /> */}

                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center justify-start ">
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
                    className="w-[12rem] lg:w-[23rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                    src="/homepage/webdev.png"
                    alt="About Image"
                  />
                </motion.div>
                <div className="flex-grow sm:pl-8 text-start sm:w-[60%] w-[80%] mx-auto">
                  <h2 className=" font-bold text-xl mb-3">Web Design</h2>
                  <p className="mb-4  text-justify">
                  Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.
                  </p>
            {/* <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} /> */}

                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 hover:scale-105 transition-all duration-500">
              <div className="h-full flex flex-col items-center justify-start ">
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
                    className="w-[12rem] lg:w-[23rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                    src="/homepage/marketing.png"
                    alt="About Image"
                  />
                </motion.div>
                <div className="flex-grow sm:pl-8 text-start sm:w-[60%] w-[80%] mx-auto">
                  <h2 className=" font-bold text-xl mb-3">Social Media Strategy</h2>
                  <p className="mb-4  text-justify"> Although the terms e-marketing and digital marketing are still dominant in academia, social media marketing is becoming more popular for both practitioners and researchers.
                  </p>
            {/* <Textlink text={"Learn more"} href={"/"} className={"font-bold text-gray-500"} /> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}

export default homepage;
