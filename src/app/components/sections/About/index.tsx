import "./style.css"
import githubIcon from '@/../public/github-icon.svg'
import linkedinIcon from '@/../public/linkedin-icon.svg'
import instagramIcon from '@/../public/instagram-icon.svg'
import downloadIcon from '@/../public/download-icon.svg'
import myImage from '@/../public/hitalloazevedo.png'
import Image from "next/image"

export default function About(){
    return (
        <section id="about" className="h-screen flex flex-col items-center bg-zinc-800">
            <div className="about-header p-5">
                <h2 className="text-4xl font-semibold text-white">About me</h2>
            </div>

            <div className="flex flex-col items-center about-content w-[90%]">
                <div className="introduction text-white text-center tracking-wide">
                    <h3 className="mb-5 text-2xl text-[#00f500]">@hitalloazevedo</h3>
                    <p>I am Hitallo Azevedo, I&apos;m 18 years old. I have been studying software development since I was 15, always improving my skills.</p>
                    <p>I&apos;m pursuing an Associate Degree in Systems Analysis and Development at Universidade Estadual de Campinas (UNICAMP).</p>
                    <p>Currently I&apos;m exploring backend development more deeply, I am really enjoying the experience using Node.js, Express and others tools, such as PrismaORM, MongoDB and Typescript.</p>
                </div>
                <div className="social-media-container flex gap-5 items-center justify-center mt-5">
                    <a href=""><Image className="w-[22px]" src={githubIcon} alt=""></Image></a>
                    <a href=""><Image className="w-[30px]" src={linkedinIcon} alt=""></Image></a>
                    <a href=""><Image className="w-[28px]" src={instagramIcon} alt=""></Image></a>
                </div>  
                <div className="download-cv text-white mt-5">
                    <p className="flex items-center justify-center gap-1 text-sm"><Image className="w-[25px]" src={downloadIcon} alt=""></Image><a href="">Download my curriculum</a></p>
                </div>
                <div className="my-image-container w-[300px] rotate-2 rounded-lg overflow-hidden mt-8 shadow-[0px_0px_30px_rgba(255,255,255,.1)]">
                    <Image src={myImage} alt=""></Image>
                </div>
            </div>
        </section>
    )
}