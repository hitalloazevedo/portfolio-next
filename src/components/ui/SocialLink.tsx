import Image from "next/image"
import githubIcon from "@/../../public/github-icon.svg"
import linkedinIcon from "@/../../public/linkedin-icon.svg"
import instagramIcon from "@/../../public/instagram-icon.svg"

export default function SocialLink(){
    return (
        <div className="social-media-container flex gap-5 items-center justify-center">
        <a target="_blank" href="https://github.com/hitalloazevedo"><Image className="w-[22px] hover:scale-110 duration-100" src={githubIcon} alt=""></Image></a>
        <a target="_blank" href="https://www.linkedin.com/in/hitalloazevedo/"><Image className="w-[30px] hover:scale-110 duration-100" src={linkedinIcon} alt=""></Image></a>
        <a target="_blank" href="https://www.instagram.com/hitalloo__"><Image className="w-[28px] hover:scale-110 duration-100" src={instagramIcon} alt=""></Image></a>
    </div>  
    )
}