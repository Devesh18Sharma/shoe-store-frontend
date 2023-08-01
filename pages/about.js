import React from "react";
import Wrapper from "@/components/wrapper";
import ContactColumn from "@/components/ContactColumn";

const About = () => {
  // Replace this with the actual content about the shoe store Kadam
  const aboutContent = `
      Kadam is your one-stop destination for trendy and comfortable shoes. 
      We have been serving shoe enthusiasts for over a decade, delivering 
      top-notch products that match your style and budget.

      Our team is dedicated to providing the best customer experience, ensuring 
      you find the perfect pair of shoes that complement your unique personality. 
      From casual sneakers to elegant heels, we have it all.

      At Kadam, we understand the importance of quality and strive to offer 
      durable and fashionable footwear that stands the test of time. 
      Join us on this journey and step into a world of style, comfort, and endless possibilities!
  `;

  return (
    <div className="w-full md:py-20 bg-gray-100">
      <Wrapper>
        {/* HEADING START */}
        <div className="text-center mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-semibold text-blue-900">
            About Kadam
          </h1>
        </div>
        {/* HEADING END */}

        {/* ABOUT CONTENT START */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14 px-5 md:px-0 items-center">
          <div className="col-span-1">
            <img
              src="/kadam.png" // Replace with an image of the shoe store
              alt="Kadam Store"
              className="w-full max-h-[50vh] rounded-md shadow-lg"
            />
          </div>
          <div className="col-span-1">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800">
              {aboutContent}
            </p>
          </div>
        </div>
        {/* ABOUT CONTENT END */}

        {/* CONTACT COLUMN START */}
        <div className="my-14">
          <ContactColumn />
        </div>
        {/* CONTACT COLUMN END */}
      </Wrapper>
    </div>
  );
};

export default About;
