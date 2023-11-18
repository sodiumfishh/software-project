-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'ONGOING', 'ENDED', 'CANCELLED');

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "eventStart" TIMESTAMP(3) NOT NULL,
    "eventEnd" TIMESTAMP(3) NOT NULL,
    "eventCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
