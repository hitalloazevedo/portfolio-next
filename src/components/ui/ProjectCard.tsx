import Image from "next/image"
import Link from "next/link"
import externalIcon from "@/../../public/external-icon.svg"
import githubIcon from "@/../../public/github-icon.svg"

export interface IProjectCardProps {
    title: string;
    description: string;
    image_url: string;
    repo_url: string;
    deploy_url: string;
    tech_stack: Array<string>;
}


export default function ProjectCard({ title, description, image_url, repo_url, deploy_url, tech_stack }: IProjectCardProps){
    return (
        <div className="flex flex-col items-center text-white overflow-hidden bg-zinc-800 w-11/12 shadow-[0px_0px_3px_rgba(255,255,255,0.3)] rounded-lg max-w-[500px]">
            <div className="bg-white">
                <Image width={800} height={800} src={image_url} alt=""></Image>
            </div>

            <div className="w-[90%] py-5">
                <h3 className="text-lg">{title}</h3>

                <p className="text-sm text-zinc-400">{description}</p>

                <div className="text-sm flex gap-3 flex-wrap mt-5">
                    {
                        tech_stack && tech_stack.map(tech => <p className="bg-zinc-900 text-[#00f500] p-1 px-2 rounded-md text-xs" key={tech}>{tech}</p>)
                    }
                </div>

                <div className="flex justify-center items-center gap-3 mt-5">
                    <Link className="flex items-center justify-center gap-2 bg-[#00dd00] text-sm text-zinc-800 font-semibold px-5 py-1 w-full text-center rounded-md" href={deploy_url} target="_blank" rel="noopener noreferer"><Image className="w-[15px]" src={externalIcon} alt=""></Image>Production</Link>
                    <Link className="flex items-center justify-center gap-2 bg-zinc-600 text-sm font-medium px-5 py-1 w-full text-center rounded-md" href={repo_url} target="_blank" rel="noopener noreferer"><Image className="w-[15px]" src={githubIcon} alt=""></Image>Repository</Link>
                </div>
            </div>
        </div>
    )
}
