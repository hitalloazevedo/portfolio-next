import SkillCard from "../../ui/SkillCard"

interface ISkill {
    uuid: string;
    title: string;
    description: string;
    svg_image: string;
}

export default async function Skills(){
    
    const response = await fetch("https://projects-repository.onrender.com/skills")
    const data = await response.json()
    const skills = data.data;

    return (
        <section id="skills">
            <div className="skills-header text-white py-20 mt-6">
                <h2 className="text-4xl text-center font-semibold">What I know?</h2>
            </div>
            
            <div className="skills-content flex flex-col items-center gap-5">
                { skills.map((skill: ISkill) => <SkillCard imageUrl={skill.svg_image} title={skill.title} description={skill.description} key={skill.uuid}/>) }
            </div>
        </section>
    )
}