import { ISkill } from "../../@types/skill";

const API_URL = "https://projects-repository.onrender.com/skills";

export const getSkills = async (): Promise<ISkill[]> => {
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
        console.error("Erro ao buscar skills:", error);
        return [];
    }
};
