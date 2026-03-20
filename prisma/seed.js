import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

const students = [
  { name: "Loy Dara", gender: "Male", class: "PVH" },
  { name: "Chhok Liheng", gender: "Male", class: "PP" },
  { name: "Tha Boromey", gender: "Female", class: "SR" },
  { name: "Sam Samnang", gender: "Male", class: "PVH" },
];

const addStudent = async () => {
  for (const s of students) {
    await prisma.students.create({ data: s });
  }
};

addStudent()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
