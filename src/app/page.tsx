import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <div className="app-header">
      <div className="header-logo">
        <Image src={""} alt=""></Image>
      </div>
      <div className="menu-icon">
        <Image src={""} alt=""></Image>
      </div>

      <nav>
        <ul>
          <a href="#home"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
      </nav>

     </div>
    </div>
  );
}
