import SkillCard from "../ui/SkillCard";
import { ISkill } from "@/@types/skill";

interface ISkillProps {
    list: ISkill[];
}

export default function Skills({ list }: ISkillProps) {
    return (
        <section id="skills">
            <div className="skills-header text-white py-20 mt-6">
                <h2 className="text-3xl text-center font-semibold">What I know?</h2>
            </div>
            
            <div className="skills-content flex flex-col items-center gap-5">
                { list.length > 0 ? (
                    list.map((skill: ISkill) => (
                    <SkillCard
                        imageUrl={skill.svg_image}
                        title={skill.title}
                        description={skill.description}
                        key={skill.uuid}
                    />
                ))
                ) : (
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <span className="loading loading-spinner loading-lg bg-white"></span>
                        <p className="text-white text-xl">Loading skills...</p>
                    </div>
                )}
            </div>
        </section>
    );
}
