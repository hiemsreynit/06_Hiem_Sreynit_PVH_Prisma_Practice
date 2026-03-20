-- CreateTable
CREATE TABLE "student_tb" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "gender" TEXT NOT NULL,
    "class" TEXT NOT NULL,

    CONSTRAINT "student_tb_pkey" PRIMARY KEY ("id")
);
