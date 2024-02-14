import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

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
    <div className="mt-2 mx-auto pt-8 px-14 bg-stone-800 max-w-sm rounded overflow-hidden shadow-lg border-solid border-2 border-red-800">
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
          {project.languages}
        </span>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
