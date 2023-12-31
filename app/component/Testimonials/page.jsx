import React from "react";
import Image from "next/image";

function Testimonials() {
  return (
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
                Ive had the pleasure of working with Elevate Clicks for this year, and I must say, the results have been nothing short of phenomenal. From the initial consultation to the execution of our marketing campaigns, their dedication and expertise have exceeded our expectations.
                </p>
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
                The team at Elevate Clicks demonstrated a deep understanding of our industry and target audience. Their tailored approach to our marketing strategy significantly improved our online visibility, resulting in a notable increase in website traffic and lead generation. 
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
  )
}

export default Testimonials  
