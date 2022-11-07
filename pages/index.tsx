import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(34,35,36)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0"
    >
      <Head>
        <title>Abhiraj's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero image="/profileImage.jpeg" />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About image="/profileImage.jpeg" />
      </section>

      {/* Experiences */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
