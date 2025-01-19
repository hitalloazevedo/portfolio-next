import Header from "./components/ui/Header";
import Home from "./components/sections/Home";
import About from "./components/sections/About";

export default function Page() {
  return (
    <div className="bg-zinc-800 h-screen">
      <Header></Header>
      <Home></Home>
      <About></About>
    </div>
  );
}
