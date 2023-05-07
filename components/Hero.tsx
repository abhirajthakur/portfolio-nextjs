import Image from "next/image";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = { image: string };

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Abhiraj Thakur",
      "I want to become a Blockchain/Web3 <Developer />",
    ],
    loop: true,
    delaySpeed: 1400,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center 
      text-center overflow-hidden"
    >
      <BackgroundCircles />
      <Image
        className="relative h-20 w-20 mx-auto rounded-full object-cover"
        src={props.image}
        alt="Profile Image"
        height={160}
        width={160}
      />
      <div className="z-20">
        {/* <h2 className="text-md uppercase text-gray-500 ml-5 pb-5 tracking-[14px]">
          Student
        </h2> */}
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-[-5px]">{text}</span>
          <Cursor cursorColor="#00FFFF" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          {/* <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link> */}
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <Cursor cursorColor="#1CBFE8" /> */
  /* <Cursor cursorColor="#FFE600" /> */
}
