import Image from "next/image"

interface ISkillCardProps {
    imageUrl: string;
    title: string;
    description: string;
}

export default function SkillCard({ imageUrl, title, description }: ISkillCardProps){
    return (
        <div className="flex text-white bg-zinc-800 w-11/12 shadow-[0px_0px_3px_rgba(255,255,255,0.3)] rounded-lg py-6 px-4 max-w-[500px] lg:min-h-[140px]">
        <div className="w-[20%]">
            <Image width={80} height={80} className="md:m-auto w-[80px] max-w-[55px]" src={imageUrl} alt=""></Image>
        </div>
        <div className="w-[80%]">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-zinc-300 text-sm">{description}</p>
        </div>
    </div>
    )
}