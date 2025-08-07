"use client";

import { Suspense } from "react";
import ProjectsList from "@/components/ui/projects-list";

export default function Dashboard() {
  
  async function logout() {
    await fetch("/api/logout", {
      method: "GET",
    });
    window.location.reload();
  }

  return (
    <div className="h-screen bg-zinc-800">
      <div className="flex p-4 justify-between items-center bg-zinc-900">
        <h1 className="text-4xl">Welcome Boss!</h1>
        <a
          type="Button"
          className="bg-red-600 p-4 rounded-md hover:bg-red-500 duration-300 active:bg-red-600"
          onClick={logout}
        >
          Logout
        </a>
      </div>

      <div className="m-auto bg-zinc-600 w-[60%] p-5 pb-10 mt-5 rounded-md">
        <h2 className="text-3xl">Projects</h2>

        <div className="flex flex-col items-center p-5 gap-5 mt-5 rounded-md max-h-[310px] overflow-scroll">
          <Suspense fallback={<div>carregando...</div>}>
            <ProjectsList/>
          </Suspense>
          {/* <ProjectListItem
            id="abc"
            imageUrl={nodeicon}
            title="nodejs"
          ></ProjectListItem>
          <ProjectListItem
            id="abc"
            imageUrl={nodeicon}
            title="nodejs"
          ></ProjectListItem>
          <ProjectListItem
            id="abc"
            imageUrl={nodeicon}
            title="nodejs"
          ></ProjectListItem>
          <ProjectListItem
            id="abc"
            imageUrl={nodeicon}
            title="nodejs"
          ></ProjectListItem> */}
        </div>
      </div>
    </div>
  );
}
