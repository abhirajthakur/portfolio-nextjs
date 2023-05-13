import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const experiences: Experience[] = await fetchExperiences();

  return {
    props: {
      pageInfo,
      socials,
      skills,
      projects,
      experiences,
    },
    revalidate: 10,
  };
};

const Home = ({ pageInfo, socials, skills, projects, experiences }: Props) => {
  return (
    <div
      className="bg-[rgb(34,35,36)] text-white h-screen snap-y snap-mandatory 
      overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
      scrollbar-thumb-[#00FFFF]/80"
    >
      <Head>
        <title>Abhiraj&apos;s Portfolio</title>
        <link rel="icon" href="/ReadyPlayerMe-Avatar.ico" />
      </Head>

      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <div>
        {/* About */}
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>

        {/* Experiences */}
        {/* <section id="experience" className="snap-center">
        <WorkExperience image="/solidity-logo.png"/>
      </section> */}

        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>

        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>

        {/* Contact Me */}
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>

        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex justify-end items-center pr-5">
              <Image
                className="h-10 w-10 rounded-full filter contrast-50 hover:invert cursor-pointer"
                src="/up-arrow.jpg"
                alt=""
                width={50}
                height={50}
              />
            </div>
          </footer>
        </Link>
      </div>
    </div>
  );
};

export default Home;
