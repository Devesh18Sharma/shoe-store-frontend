import React from "react";
import Image from "next/image";
import Wrapper from "@/components/wrapper";

const Contact = () => {
  return (
    <div className="w-full md:py-20 bg-gray-100">
    <Wrapper>
      {/* HEADING AND PARAGRAPH START */}
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          Contact Us
        </div>
        <p className="text-gray-600">
          We'd love to hear from you! For any queries or wholesale
          collaboration, you can reach out to us through the contact details
          below.
        </p>
      </div>
      {/* HEADING AND PARAGRAPH END */}

      {/* CONTACT DETAILS START */}
      <div className="flex flex-col md:flex-row gap-12 py-10 items-center">
        {/* CONTACT INFO START */}
        <div className="flex-[2]">
          <div className="text-lg font-bold text-blue-900">Contact Details</div>
          <div className="p-5 my-5 bg-white rounded-xl shadow-md">
            <div className="text-md md:text-lg font-medium text-gray-700">
              For queries and wholesale collaboration, you can contact us at:
            </div>
            <div className="text-md md:text-lg font-medium text-blue-600">
              <span className="text-blue-900">Mobile:</span> 9811020009
            </div>
            <div className="text-md md:text-lg font-medium text-blue-600">
              <span className="text-blue-900">Email:</span> kapgz008@gmail.com
            </div>
          </div>
        </div>
        {/* CONTACT INFO END */}

        {/* CONTACT GRAPHICS START */}
        <div className="flex-[1]">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-32 h-32">
              <Image
                src="/phone-icon.png" // Replace with your own phone icon image
                alt="Phone Icon"
                fill
              />
            </div>
            <div className="relative w-32 h-32">
              <Image
                src="/email-icon.png" // Replace with your own email icon image
                alt="Email Icon"
                fill
              />
            </div>
          </div>
        </div>
        {/* CONTACT GRAPHICS END */}
      </div>
      {/* CONTACT DETAILS END */}
    </Wrapper>
  </div>
);
};

export default Contact;