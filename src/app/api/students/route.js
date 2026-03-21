import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";


export async function GET (request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (id) {
        const student = await prisma.students.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json({
        status: 200,
        message: "Student found successfully.",
        payload: student
    })
    }
    const res = await prisma.students.findMany()

    return NextResponse.json({
        status: 200,
        message: "Get all students successfully.",
        payload: res
    })
}

export async function POST (request) {
    const { name, gender, class: className } = await request.json()

    const addStudent = await prisma.students.create({
        data: {
            name,
            gender,
            class: className
        },
    })

    return NextResponse.json({
        status: 201,
        message: "Student created successfully.",
        payload: addStudent
    })
}