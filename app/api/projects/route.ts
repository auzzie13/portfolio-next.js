import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";


const createProjectSchema = z.object({
  project_name: z.string().min(1).max(255),
  code_link: z.string().min(1).max(255),
  deployment_link: z.string().min(1).max(255),
  description: z.string().min(1),
  languages: z.string().min(1).max(255),
});

export async function POST(request: NextRequest) {  
  const body = await request.json();
  const validation = createProjectSchema.safeParse(body);
  if (!validation.success) 
    return NextResponse.json(validation.error.errors, { status: 400 });

    const newProject = await prisma.project.create({
        data: { 
            project_name: body.project_name,
            code_link: body.code_link,
            deployment_link: body.deployment_link,
            description: body.description,
            languages: body.languages,
        }
    });

    return NextResponse.json(newProject, { status: 201 });
}