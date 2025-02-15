import { IProject } from "../@types/project";

const API_URL = "https://projects-repository.onrender.com/projects";

export const getProjects = async (): Promise<IProject[]> => {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }

        const body = await response.json();

        return body.data ?? []; // Retorna um array vazio se 'data' for undefined

    } catch (error) {
        console.error("Erro ao buscar projetos:", error);
        return [];
    }
};
