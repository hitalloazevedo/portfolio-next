import { getProjectByUUID } from "@/app/api/getProjectByUUID"
import { use } from "react";

export default function Page({ params }: { params: { id: string } }) {
    const uuid = params.id;
    const project = use(getProjectByUUID(uuid));
    console.log(project);

    return (
        <div className="bg-zinc-800 h-screen flex items-center">
            <form className="flex flex-col bg-zinc-600 max-w-[600px] gap-5 p-3 m-auto min-w-[500px]">
                <div className="flex flex-col w-full gap-2">
                    <p>Title</p>
                    <input className="p-5 rounded-md" type="text" name="title"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <p>Description</p>
                    <textarea className="p-5 rounded-md" name="description" id=""></textarea>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <p>Deploy URL</p>
                    <input className="p-5 rounded-md" type="text" name="productionUrl"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <p>Github repo URL</p>
                    <input className="p-5 rounded-md" type="text" name="repositoryUrl"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <p>Skills</p>
                    <input className="p-5 rounded-md" type="text" name="skills"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <p>Project Image</p>
                    <input className="p-5 rounded-md" type="file" name="project-image"/>
                </div>

                <input type="submit" value={"Save"} className="bg-indigo-500 p-5 rounded-md"/>
            </form>
        </div>
    )
}