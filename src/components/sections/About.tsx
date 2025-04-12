import downloadIcon from '@/../public/download-icon.svg'
//import myImage from '@/../public/hitalloazevedo.png'
import profileImage from '@/../public/profile-image.jpeg'
import Image from "next/image"
import SocialLink from '../ui/SocialLink'

export default function About(){
    return (
        <section id="about" className="flex flex-col items-center">
            <div className="about-header py-20">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">About me</h2>
            </div>

            <div className="flex flex-col items-center about-content w-[90%] lg:gap-16 lg:flex-row max-w-[1160px]">
                <div className='lg:flex lg:flex-col lg:items-start m-auto'>
                    <div className="introduction text-white text-center tracking-wide mb-5 max-w-[620px] lg:text-start">
                        <h3 className="mb-5 text-2xl text-[#00f500]">@hitalloazevedo</h3>
                        <p>I am Hitallo Azevedo, I&apos;m 18 years old. I have been studying software development since I was 15, always improving my skills.</p>
                        <p>I&apos;m pursuing an Associate Degree in Systems Analysis and Development at Universidade Estadual de Campinas (UNICAMP).</p>
                        <p>Currently I&apos;m exploring backend development more deeply, I am really enjoying the experience using Node.js, Express and others tools, such as PrismaORM, MongoDB and Typescript.</p>
                    </div>
                    <SocialLink/>
                    <div className="download-cv text-white mt-5">
                        <p className="flex items-center justify-center gap-1 text-sm"><Image className="w-[25px]" src={downloadIcon} alt=""></Image><a href="https://projects-repository.onrender.com/curriculum">Download my curriculum</a></p>
                    </div>
                </div>
                <div className="my-image-container w-[300px] rotate-2 rounded-lg overflow-hidden mt-8 mb-5 shadow-[0px_0px_30px_rgba(255,255,255,.1)]">
                    <Image src={profileImage} alt="Hitallo Azevedo's pixar style profile picture."></Image>
                </div>
            </div>
        </section>
    )
}
