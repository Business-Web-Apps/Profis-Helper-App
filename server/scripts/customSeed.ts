import { EnumAddressAddressType, EnumJobCurrentStatus, EnumJobTypeName, PrismaClient } from "@prisma/client";

export async function customSeed() {
  const client = new PrismaClient();
  const adminUsername = "admin";
  const userUsername = "user";
  const helperUsername = "helper";
  const customerUsername = "customer";

  //get users by username
  const adminUser = await client.user.findUnique({
    where: { username: adminUsername }
  });
  const standardUser = await client.user.findUnique({
    where: { username: userUsername }
  });
  const helperUser = await client.user.findUnique({
    where: { username: helperUsername }
  });
  const customerUser = await client.user.findUnique({
    where: { username: customerUsername }
  });

  // add addresses to users
  const personalAddressAdmin = {
    addressType: EnumAddressAddressType.personal,
    city: "Berlin",
    country: "Deutschland",
    housNum: "12b",
    region: "Berlin",
    streetName: "Herrmannstrasse",
    userId: adminUser?.id
  }
  const personalAddressUser = {
    addressType: EnumAddressAddressType.personal,
    city: "Stuttgart",
    country: "Deutschland",
    housNum: "12b",
    region: "Baden-Wuertenberg",
    streetName: "Berlinerstrasse",
    userId: standardUser?.id
  }
  const personalAddressHelper = {
    addressType: EnumAddressAddressType.personal,
    city: "Stuttgart",
    country: "Deutschland",
    housNum: "25",
    region: "Baden-Wuertenberg",
    streetName: "Feuerbacherstrasse",
    userId: helperUser?.id
  }
  const personalAddressCustomer = {
    addressType: EnumAddressAddressType.personal,
    city: "Stuttgart",
    country: "Deutschland",
    housNum: "89",
    region: "Baden-Wuertenberg",
    streetName: "SchwesingerPlatz",
    userId: customerUser?.id
  }
  const invoiceAddressCustomer = {
    addressType: EnumAddressAddressType.invoice,
    city: "Stuttgart",
    country: "Deutschland",
    housNum: "95",
    region: "Baden-Wuertenberg",
    streetName: "Hohenzollenplatz",
    userId: customerUser?.id
  }

  await client.address.createMany({
    data: [personalAddressAdmin, personalAddressUser, personalAddressHelper, personalAddressCustomer, invoiceAddressCustomer]
  });

  // add job types
  const moveJobType = await client.jobType.create({
    data: {
      description: "Umzug job",
      image: "Test Image",
      name: EnumJobTypeName.move,
      pricePerHour: 12
    }
  });

  const gardneringJobType = await client.jobType.create({
    data: {
      description: "Gertenarbeit",
      image: "Test Image",
      name: EnumJobTypeName.gardnening,
      pricePerHour: 14
    }
  });

  const furnitureAssembyJobType = await client.jobType.create({
    data: {
      description: "Moebel Montage",
      image: "Test Image",
      name: EnumJobTypeName.furnitureAssemby,
      pricePerHour: 12
    }
  });

  const otherJobType = await client.jobType.create({
    data: {
      description: "Moebel Montage",
      image: "Test Image",
      name: EnumJobTypeName.furnitureAssemby,
      pricePerHour: 12
    }
  });

  // add 3 test jobs from the 3 job types
  const moveJob = {
    currentStatus: EnumJobCurrentStatus.submitted,
    description: "Umzug von meiner wohnung nach Babelsberg",
    endDate: new Date(Date.now() + 5).toISOString(),
    estimatedDuration: 5,
    jobTypeId: moveJobType?.id,
    numberOfHelper: 4,
    pricePerHour: 12,
    startDate: new Date(Date.now()).toISOString(),
    title: "Umzug von meiner wohnung nach Babelsberg"
  }

  const gardneringJob = {
    currentStatus: EnumJobCurrentStatus.submitted,
    description: "Gartenarbeit bei mir in stuttgart",
    endDate: new Date(Date.now() + 3).toISOString(),
    estimatedDuration: 3,
    jobTypeId: gardneringJobType?.id,
    numberOfHelper: 4,
    pricePerHour: 12,
    startDate: new Date(Date.now()).toISOString(),
    title: "Garten arbeit in stuttgart"
  }

  const furnitureAssembyJob = {
    currentStatus: EnumJobCurrentStatus.submitted,
    description: "Unterstuetzung für die Montage meiner Möbel",
    endDate: new Date(Date.now() + 5).toISOString(),
    estimatedDuration: 5,
    jobTypeId: furnitureAssembyJobType?.id,
    numberOfHelper: 4,
    pricePerHour: 12,
    startDate: new Date(Date.now()).toISOString(),
    title: "Umzug von meiner wohnung nach Babelsberg"
  }

  await client.job.createMany({
    data: [moveJob, gardneringJob, furnitureAssembyJob]
  });

  client.$disconnect();
}
