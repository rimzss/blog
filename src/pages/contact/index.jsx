import React from "react";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="m-14 lg:w-1/2">
        <h1 className="text-4xl font-medium mb-8">Contact Us</h1>
        <p className="text-secondary500 font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit magnam
          similique ab nesciunt tempore, modi neque odio dolor commodi
          reprehenderit quam error obcaecati repellendus. Dicta, aut.
          Perferendis, quis. Expedita tempora molestias dolore dicta natus
          molestiae pariatur facilis quas! Aperiam, tempore? Aspernatur
          repudiandae consectetur porro vel amet dolorem ipsam earum quam!
        </p>
        <div className="sm:flex mt-8 gap-8 ">
          <div className="sm:w-1/2 p-5 border-[1px] rounded-md">
            <h2 className="text-xl font-medium">Address</h2>
            <p className="text-secondary500 font-light">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="sm:w-1/2 mt-8 sm:mt-0 p-5 border-[1px] rounded-md">
            <h2 className="text-xl font-medium">Contact</h2>
            <p className="text-secondary500 font-light">313-332-8662</p>
            <p className="text-secondary500 font-light">info@email.com</p>
          </div>
        </div>
        <div className="bg-secondary50 mt-14 p-10 rounded-md">
          <h3 className="font-medium text-xl">Leave a message</h3>
          <div className="md:flex gap-7 w-full mt-5">
            <input
              className="border-[1px] md:w-1/3 rounded-md py-1 px-4 block md:inline"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="border-[1px] md:w-2/5 mt-5 md:mt-0 rounded-md py-1 px-4"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <input
            className="border-[1px] rounded-md py-1 px-4 block md:w-4/5 my-5"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="border-[1px] rounded-md py-1 px-4 md:w-4/5 h-32"
            type="text"
            placeholder="Write a message"
          />
          <Button className="bg-[#4B6BFB] mt-5" variant="contained">
            Send Message
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Contact;
