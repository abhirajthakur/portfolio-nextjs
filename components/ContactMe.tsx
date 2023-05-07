import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
    window.location.href = `mailto:abhirajthakur124@gmail.com?subject=${formData.subject}
    &body=Hi, I am ${formData.name}\n${formData.message}`;
  };

  return (
    <div
      className="min-h-screen relative flex flex-col text-center md:text-left md:flex-row 
        md:max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[16px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-4 mt-[7.5rem]">
        <h4 className="text-2xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#00FFFF]/40">Lets talk.</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#00FFFF] h-5 w-6 animate-pulse" />
            <p className="text-lg">+91 1234567890</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#00FFFF] h-5 w-6 animate-pulse" />
            <p className="text-lg">abhirajthakur124@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#00FFFF] h-5 w-6 animate-pulse" />
            <p className="text-lg">Pinjore, Haryana, India</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
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
            className="bg-[#00FFFF] px-8 py-4 rounded-md text-black font-bold text-lg hover:bg-[#00FFFF]/50 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
