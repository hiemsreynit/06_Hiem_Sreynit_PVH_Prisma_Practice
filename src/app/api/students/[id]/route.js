import { NextResponse } from "next/server"
import prisma from "../../../../../lib/prisma"

`1`
export async function GET(_, {params}) {
    const { id } = await params;
    const student = await prisma.students.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    return NextResponse.json({
        status: 200,
        message: `Get student with id ${id} successfully.`,
        payload: student
    })
}


export async function DELETE (_, { params }) {
    const { id } = await params

    await prisma.students.delete({
        where: {
            id: +id
        }
    })

    return NextResponse.json({
        status: 200,
        message: "Student deleted successfully.",
    })
}