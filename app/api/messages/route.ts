import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createMessageSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createMessageSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newMessage = await prisma.message.create({
    data: {
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      message: body.message,
    },
  });
  return NextResponse.json(newMessage, { status: 201 });
}
