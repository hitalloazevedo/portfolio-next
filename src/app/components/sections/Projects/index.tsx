import ProjectCard from "../../ui/ProjectCard";
import { IProject } from "@/app/interfaces/Project";

export async function getServerSideProps() {
    const response = await fetch("https://projects-repository.onrender.com/projects");
    const data = await response.json();
  
    return {
      props: {
        projects: data.data || [], // Passa os dados para o componente como props
      },
    };
}
  
interface ProjectsProps {
    projects: Array<IProject>
}

export default function Projects({ projects }: ProjectsProps) {
return (
    <section id="projects">
    <div className="projects-header py-20">
        <h2 className="text-4xl text-white text-center font-semibold">
        <span className="text-[#00f500]">Featured</span> projects
        </h2>
    </div>

    <div className="flex flex-col items-center projects-content gap-5">
        {projects.length > 0 ? (
        projects.map((project) => (
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
        <p>No projects available.</p>
        )}
    </div>
    </section>
);
}