import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { SideBar } from "@/app/components";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const styles =
  "fixed right-0 top-4 h-full flex flex-col pr-8 gap-10 justify-center";

interface Props {
  params: { id: string };
}

const ProjectDetailPage = async ({ params }: Props) => {
  // if (typeof params.id !== 'number') notFound();
  // console.log(typeof params.id);

  const project = await prisma.project.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!project) notFound();


  return (
    <div>
    <Link className="mx-2 flex items-center text-red-600" key="/portfolio/list" href="/portfolio/list"><ArrowLeftIcon color="red" />Back</Link>
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-8 px-14 bg-stone-800 max-w-sm rounded overflow-hidden shadow-lg border-solid border-2 border-red-600">
      {/* <img
  className="w-full"
  src="/img/card-top.jpg"
  alt="Sunset in the mountains"
/> */}

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.project_name}</div>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {project.code_link}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {project.deployment_link}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {project.primary_language}
        </span>
      </div>
    </div>
    <SideBar styles={styles} />
    </div>
  );
};

export async function generateMetadata({ params }: Props) {
  const project = await prisma.project.findUnique({ where: { id: parseInt(params.id) }});

  return {
    title: project?.project_name,
    description: project?.description
  }
}

export default ProjectDetailPage;
