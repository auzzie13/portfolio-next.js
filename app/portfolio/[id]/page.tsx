import React from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';

interface Props {
    params: { id: string }
}

const ProjectDetailPage = async ({ params }: Props) => {
    if (typeof params.id !== 'number') notFound();

    const project = await prisma.project.findUnique({
        where: { id: parseInt(params.id)}
    })

    if(!project)
        notFound();

  return (
    <div>
        <p>{project.project_name}</p>
        <p>{project.description}</p>
        <p>{project.code_link}</p>
        <p>{project.deployment_link}</p>
    </div>
  )
}

export default ProjectDetailPage;