import "./style.css"
import Image from "next/image"
import nodeJsIcon from "@/../public/nodejs-icon.svg"
import typescriptIcon from "@/../public/typescript-icon.svg"
import reactIcon from "@/../public/react-icon.svg"
import gitIcon from "@/../public/git-icon.svg"
import prismaIcon from "@/../public/prisma-icon.svg"
import pythonIcon from "@/../public/python-icon.svg"
import mongoIcon from "@/../public/mongo-icon.svg"
import mysqlIcon from "@/../public/mysql-icon.svg"
import tailwindIcon from "@/../public/tailwind-icon.svg"
import downIcon from "@/../public/down-icon.svg"

interface ICarrouselProps {
  icons: Array<string>;
}

function Carrousel({ icons }: ICarrouselProps){
  return <div className="carrousel flex gap-3">
    <div style={{ paddingRight: `${icons.length * 42.5}px`}} className={`group`}>

      { icons.map(icon => <Image className="size-[40px]" key={icons.indexOf(icon)} src={icon} alt=""></Image>) }

    </div>
    <div style={{ paddingRight: `${icons.length * 42.5}px`}} aria-hidden className={`group`}>

    { icons.map(icon => <Image className="size-[40px]" key={icons.indexOf(icon)} src={icon} alt=""></Image>) }

    </div>
  </div>
}

const icons = [
  nodeJsIcon,
  typescriptIcon,
  reactIcon,
  gitIcon,
  prismaIcon,
  pythonIcon,
  mongoIcon,
  mysqlIcon,
  tailwindIcon,
];

export default function Home() {
    return (
        <section id="home" className="flex flex-col justify-center items-center text-white h-screen">
          <div className="home-content z-[6]">
            <div className="text-content-container text-center">
              <h2 className="text-[#00F500] text-[2rem] font-bold">Fullstack</h2>
              <h2 className="text-[2rem] font-bold" >Web Developer</h2>
            </div>
            <div className="tech-image-container mt-3">
              <Carrousel icons={icons}></Carrousel>
            </div>
          </div>

          <a className="arrow-down absolute bottom-[20px]" href="#about"><Image className="w-[50px]" src={downIcon} alt=""></Image></a>
      </section>
    )
}