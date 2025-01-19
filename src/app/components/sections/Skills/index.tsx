import SkillCard from "../../ui/SkillCard";
import { ISkill } from "@/app/interfaces/Skill";

interface ISkillProps {
    skills: ISkill[];
}

// Função que será executada no servidor para obter os dados
export async function getServerSideProps() {
    // Substitua pela URL real de onde as habilidades são obtidas
    const response = await fetch("https://projects-repository.onrender.com/skills");
    const data = await response.json();

    return {
        props: {
            skills: data || [], // Passa as skills para o componente
        },
    };
}

export default function Skills({ skills }: ISkillProps) {
    return (
        <section id="skills">
            <div className="skills-header text-white py-20 mt-6">
                <h2 className="text-4xl text-center font-semibold">What I know?</h2>
            </div>
            
            <div className="skills-content flex flex-col items-center gap-5">
                {skills && skills.map((skill: ISkill) => (
                    <SkillCard
                        imageUrl={skill.svg_image}
                        title={skill.title}
                        description={skill.description}
                        key={skill.uuid}
                    />
                ))}
            </div>
        </section>
    );
}
