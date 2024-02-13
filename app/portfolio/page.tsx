import React from "react";
import prisma from "@/prisma/client";

// interface Props {
//   project_name: string;
//   code_link: string;
//   deployment_link: string;
//   description: string;
//   languages: string;
// }

export const PortfolioPage = async () => {
  const projects = await prisma.project.findMany();

  return (
    <div className="mx-2 pt-8 px-14 bg-stone-800 text-red-800 grid grid-cols-4 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="max-w-sm rounded overflow-hidden shadow-lg border-solid border-2 border-red-800"
        >
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
      ))}
    </div>
  );
};

export default PortfolioPage;
