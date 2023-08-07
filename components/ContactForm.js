import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:klajdimurati3@gmail?subject=${formData.subject}&body=${formData.message}`;
  };
  return (
    <div className="bg-white/50 p-[2rem] rounded-xl dark:bg-zinc-500/50">
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
          required
        />
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
          name="subject"
          required
        />

        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
          name="message"
          required
        />
        <div className="flex items-end justify-end pt-4">
          <button
            type="submit"
            className="  border border-[#86906F] py-2 px-5 rounded-full text-black font-semibold text hover:bg-[#86906F] dark:border-[#a1b378] dark:hover:bg-[#a1b378] hover:text-white transition-all ease-linear  duration-200 dark:text-white"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
