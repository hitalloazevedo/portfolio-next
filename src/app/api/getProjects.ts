import { IProject } from "../interfaces/Project";

export const getProjects = async (): Promise<IProject[]> => {
    const response = await fetch("https://projects-repository.onrender.com/projects");
    const body = await response.json();
    return body.data;
}