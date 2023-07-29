import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import ContactItems from "./ContactItems";

export default function Contact() {
  return (
    <div className="min-h-screen  relative flex justify-center items-center ">
      <div className="relative flex flex-col space-y-10 lg:space-y-20 mt-16 md:mt-0">
        <div className="relative flex flex-col justify-center items-center space-y-10">
          <h1 className="custom-h1 mt-10 md:mt-0">Contact</h1>
          <p className="max-w-xl text-center">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        <div className="relative flex flex-col-reverse md:flex-row md:space-x-16 lg:space-x-28 justify-center items-center">
          <div className="my-10 md:my-0">
            <ContactItems />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
