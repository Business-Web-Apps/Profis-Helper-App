-- CreateEnum
CREATE TYPE "EnumUserGender" AS ENUM ('m', 'f', 'o');

-- CreateEnum
CREATE TYPE "EnumAddressAddressType" AS ENUM ('invoice', 'personal', 'other');

-- CreateEnum
CREATE TYPE "EnumJobCurrentStatus" AS ENUM ('submitted', 'accepted', 'applyable', 'ready', 'inProgress', 'aborted', 'interrupted', 'done', 'cancelled');

-- CreateEnum
CREATE TYPE "EnumJobTypeName" AS ENUM ('move', 'gardnening', 'furnitureAssemby', 'other');

-- CreateEnum
CREATE TYPE "EnumJobReportJobStatus" AS ENUM ('submitted', 'accepted', 'applyble', 'ready', 'inProgress', 'aborted', 'interrupted', 'done', 'cancelled');

-- CreateEnum
CREATE TYPE "EnumPaymentMethod" AS ENUM ('bankTransfer', 'creditCard', 'Paypal', 'other');

-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "gender" "EnumUserGender",
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "roles" TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "addressType" "EnumAddressAddressType" NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "housNum" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "streetName" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currentStatus" "EnumJobCurrentStatus" NOT NULL,
    "description" TEXT NOT NULL,
    "endDate" TIMESTAMP(3),
    "estimatedDuration" DOUBLE PRECISION NOT NULL,
    "id" TEXT NOT NULL,
    "jobTypeId" TEXT,
    "numberOfHelper" DOUBLE PRECISION NOT NULL,
    "paidAmount" DOUBLE PRECISION,
    "pricePerHour" DOUBLE PRECISION NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobType" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "image" TEXT,
    "name" "EnumJobTypeName" NOT NULL,
    "pricePerHour" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobReport" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "id" TEXT NOT NULL,
    "jobId" TEXT,
    "jobStatus" "EnumJobReportJobStatus" NOT NULL,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "method" "EnumPaymentMethod",
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_jobTypeId_fkey" FOREIGN KEY ("jobTypeId") REFERENCES "JobType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobReport" ADD CONSTRAINT "JobReport_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
