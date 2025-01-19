import Header from "./components/ui/Header";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";

export default function Page() {
  return (
    <div className="bg-zinc-800">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}
