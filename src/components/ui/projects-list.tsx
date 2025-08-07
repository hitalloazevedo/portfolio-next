import { getProjects } from "@/app/api/getProjects";
import { use } from "react";
import ProjectListItem from "./dashboard/project-list-item";

export default function ProjectsList() {
  const projects = use(getProjects());
  return (
    <>
      {projects.map((project) => (
        <ProjectListItem
          imageUrl={project.image_url}
          title={project.title}
          key={project.uuid}
          id={project.uuid}
        />
      ))}
    </>
  );
}
