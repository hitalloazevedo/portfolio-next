import Image from "next/image"
import editIcon from "@/../public/edit-icon.svg"
import trashIcon from "@/../public/trash-icon.svg"

interface IProjectListItemProps {
    imageUrl: string;
    title: string;
    id: string;
}

export default function ProjectListItem({ id, title, imageUrl }: IProjectListItemProps) {
    return (
    <div id={id} className="flex bg-zinc-500 min-w-[500px] max-w-[600px] w-full p-5 justify-between rounded-md"> {/* skills */}
    <div className="flex items-center gap-3">
            <Image width={100} height={100} src={imageUrl} alt="icon"></Image>
            <h2>{ title }</h2>
        </div>
        <div className="flex gap-3 items-center">
            <a href={`/dashboard/projects/edit/${id}`} className="p-2 rounded-md hover:bg-gray-300 duration-200"><Image width={15} height={15} src={editIcon} alt="edit icon"></Image></a>
            <a href="" className="p-2 rounded-md hover:bg-red-500 duration-200"><Image width={15} height={15} src={trashIcon} alt="trash icon"></Image></a>
        </div>
    </div>
    )
}
