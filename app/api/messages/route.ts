import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";

const createMessageSchema = z.object({
    first_name: z.string().min(1, "First name is required.").max(50),
    last_name: z.string().min(1, "Last name is required.").max(50),
    email: z.string().min(1, "Email is required.").max(50),
    message: z.string().min(1, "Your message is empty.")
})


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createMessageSchema.safeParse(body);
    if(!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

    const newMessage = await prisma.message.create({
        data: {
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            message: body.message
        }
    })
    return NextResponse.json(newMessage, { status: 201 });
    
}