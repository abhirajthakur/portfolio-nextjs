import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(34,35,36)] text-white h-screen snap-y snap-mandatory 
      overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
      scrollbar-thumb-[#00FFFF]/80"
    >
      <Head>
        <title>Abhiraj's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero image="/ReadyPlayerMe-Avatar.png" />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About image="/profile-pic.png" />
      </section>

      {/* Experiences */}
      {/* <section id="experience" className="snap-center">
        <WorkExperience image="/solidity-logo.png"/>
      </section> */}

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex justify-center items-center">
            <img
              className="h-10 w-10 rounded-full filter contrast-50 hover:invert cursor-pointer"
              src="/up-arrow.jpg"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
