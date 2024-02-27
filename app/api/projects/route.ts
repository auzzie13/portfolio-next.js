import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";


const createProjectSchema = z.object({
  project_name: z.string().min(1).max(255),
  code_link: z.string().min(1).max(255),
  deployment_link: z.string().min(1).max(255),
  description: z.string().min(1),
  primary_language: z.string().min(1).max(50),
  secondary_language: z.string().min(0).max(50).optional(),
  secondary_language_2: z.string().min(0).max(50).optional(),
  secondary_language_3: z.string().min(0).max(50).optional(),

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
            primary_language: body.primary_language,
            secondary_language: body.secondary_language,
            secondary_language_2: body.secondary_language_2,
            secondary_language_3: body.secondary_language_3,

        }
    });

    return NextResponse.json(newProject, { status: 201 });
}