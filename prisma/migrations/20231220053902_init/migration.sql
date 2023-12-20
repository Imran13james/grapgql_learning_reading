/*
  Warnings:

  - You are about to drop the `MyUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MyUsers";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
