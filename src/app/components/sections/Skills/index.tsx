import SkillCard from "../../ui/SkillCard";
import { ISkill } from "@/app/interfaces/Skill";

interface ISkillProps {
    list: ISkill[];
}

export default function Skills({ list }: ISkillProps) {
    return (
        <section id="skills">
            <div className="skills-header text-white py-20 mt-6">
                <h2 className="text-4xl text-center font-semibold">What I know?</h2>
            </div>
            
            <div className="skills-content flex flex-col items-center gap-5">
                {list && list.map((skill: ISkill) => (
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
