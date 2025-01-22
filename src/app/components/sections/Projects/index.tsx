import ProjectCard from "../../ui/ProjectCard";
import { IProject } from "@/app/interfaces/Project";
interface ProjectsProps {
    list: Array<IProject>
}

export default function Projects({ list }: ProjectsProps) {
return (
    <section id="projects">
    <div className="projects-header py-20">
        <h2 className="text-3xl text-white text-center font-semibold">
        <span className="text-[#00f500]">Featured</span> projects
        </h2>
    </div>

    <div className="flex flex-col items-center projects-content gap-5">
        {list.length > 0 ? (
            list.map((project: IProject) => (
                <ProjectCard 
                    key={project.uuid}
                    title={project.title}
                    description={project.description}
                    deploy_url={project.deploy_url}
                    image_url={project.image_url}
                    repo_url={project.repo_url}
                    tech_stack={project.tech_stack}
                    />
        ))
        ) : (
            <div className="flex flex-col gap-3 justify-center items-center">
                <span className="loading loading-spinner loading-lg bg-white"></span>
                <p className="text-white text-xl">Loading projects...</p>
            </div>
        )}
    </div>
    </section>
);
}