-- CreateTable
CREATE TABLE "MyUsers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,

    CONSTRAINT "MyUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MyUsers_email_key" ON "MyUsers"("email");
