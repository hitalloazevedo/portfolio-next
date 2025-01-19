import { ISkill } from "../interfaces/Skill";

export const getSkills = async (): Promise<ISkill[]> => {
    const response = await fetch("https://projects-repository.onrender.com/skills");
    const body = await response.json();
    return body.data;
}