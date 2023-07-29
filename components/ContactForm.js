import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:klajdimurati3@gmail?subject=${formData.subject}&body=${formData.message}`;
  };
  return (
    <div className="bg-white p-[2rem] rounded-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col space-y-3 lg:space-y-5 "
      >
        <input
          {...register("name")}
          placeholder="Name"
          className="contactInput"
          type="text"
          name="name"
          autoComplete="on"
        />
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
          name="subject"
        />

        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
          name="message"
        />
        <div className="flex items-end justify-end pt-4">
          <button
            type="submit"
            className="  border border-[#86906F] py-2 px-5 rounded-full text-black font-semibold text hover:bg-[#86906F] hover:text-white transition-all ease-linear  duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
