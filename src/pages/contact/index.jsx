import React from "react";

const Contact = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="m-14 w-1/2">
        <h1 className="text-4xl font-medium mb-8">Contact Us</h1>
        <p className="text-secondary500 font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit magnam
          similique ab nesciunt tempore, modi neque odio dolor commodi
          reprehenderit quam error obcaecati repellendus. Dicta, aut.
          Perferendis, quis. Expedita tempora molestias dolore dicta natus
          molestiae pariatur facilis quas! Aperiam, tempore? Aspernatur
          repudiandae consectetur porro vel amet dolorem ipsam earum quam!
        </p>
        <div className="flex mt-8 gap-8 ">
          <div className="w-1/2 p-5 border-[1px] rounded-md">
            <h2 className="text-xl font-medium">Address</h2>
            <p className="text-secondary500 font-light">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="w-1/2 p-5 border-[1px] rounded-md">
            <h2 className="text-xl font-medium">Contact</h2>
            <p className="text-secondary500 font-light">313-332-8662</p>
            <p className="text-secondary500 font-light">info@email.com</p>
          </div>
        </div>
        <div className="bg-secondary50 mt-14 p-10 rounded-md">
          <h3>Leave a message</h3>
          <div className="flex gap-7 w-full">
            <input
              className="border-[1px] rounded-md py-1 px-4"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="border-[1px] rounded-md py-1 px-4"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <input
            className="border-[1px] rounded-md py-1 px-4 block w-4/5 my-5"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="border-[1px] rounded-md py-1 px-4 w-4/5 h-20"
            type="text"
            placeholder="Write a message"
          />
        </div>
      </div>
    </main>
  );
};

export default Contact;
