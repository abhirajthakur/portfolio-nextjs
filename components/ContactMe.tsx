import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
    window.location.href = `mailto:abhirajthakur124@gmail.com?subject=${formData.subject}
    &body=${formData.message}`;
  };

  return (
    <div
      className="min-h-screen relative flex flex-col text-center md:text-left md:flex-row 
        md:max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[16px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 xl:-mb-20">
        <h4 className="text-xl md:text-3xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#00FFFF]/40">Lets talk.</span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center space-x-3.5 justify-center">
            <EnvelopeIcon className="text-[#00FFFF] h-6 w-6 animate-pulse" />
            <p className="text-xl">abhirajthakur124@gmail.com</p>
          </div>

          <div className="flex items-center space-x-3.5 justify-center">
            <MapPinIcon className="text-[#00FFFF] h-6 w-6 animate-pulse" />
            <p className="text-xl">Pinjore, Haryana, India</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-1.5 w-fit mx-auto overflow-y-auto"
        >
          <div className="flex space-x-1.5">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            required
          />
          <button
            type="submit"
            className="bg-[#00FFFF] py-2.5 rounded-sm text-black font-bold text-base 
            hover:bg-[#00FFFF]/50 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
