import type { NextPage } from "next";
import Head from "next/head";
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
      <section className="snap-center">
        <Hero image="/profileimage.jpg" />
      </section>

      {/* About */}

      {/* Experiences */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
