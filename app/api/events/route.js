import prisma from "@/prisma/client"
import { NextResponse } from "next/server"
import { z } from "zod"

const createEventSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1)
})

export async function POST(request) {
  const body = await request.json()
  const validation = createEventSchema.safeParse(body)

  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })

  const newEvent = await prisma.event.create({
    data: { title: body.title, description: body.description }
  })

  return NextResponse.json(newEvent, { status: 201 })
}