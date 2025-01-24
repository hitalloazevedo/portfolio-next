"use client"

import Header from "./components/ui/Header";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import { useEffect, useState } from "react";
import { getProjects } from "./api/getProjects";
import { getSkills } from "./api/getSkills";
import { IProject } from "./interfaces/Project";
import { ISkill } from "./interfaces/Skill";

export default function Page() {

  const [projects, setProjects] = useState(Array<IProject>)
  const [skills, setSkills] = useState(Array<ISkill>)

  useEffect(() => {
    (async () => {
      setProjects( await getProjects() );
      setSkills( await getSkills() );
    })()
  }, [])

  return (
    <div className="bg-zinc-800">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Skills list={skills} ></Skills>
      <Projects list={projects} ></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
