import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { Salt, parseSalt } from "../src/auth/password.service";
import { hash } from "bcrypt";
import { customSeed } from "./customSeed";

if (require.main === module) {
  dotenv.config();

  const { BCRYPT_SALT } = process.env;

  if (!BCRYPT_SALT) {
    throw new Error("BCRYPT_SALT environment variable must be defined");
  }

  const salt = parseSalt(BCRYPT_SALT);

  seed(salt).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

async function seed(bcryptSalt: Salt) {
  console.info("Seeding database...");

  const client = new PrismaClient();

  console.info("Createing users...");

  try {
    await client.user.createMany({
      data: [
        {
          username: "user",
          password: await hash("user", bcryptSalt),
          firstName: "user firstname",
          lastName: "user lastname",
          roles: ["user"],
          email: "user@example.com",
        },
        {
          username: "admin",
          password: await hash("admin", bcryptSalt),
          firstName: "admin firstname",
          lastName: "admin lastname",
          roles: ["admin"],
          email: "admin@example.com",
        },
        {
          username: "customer",
          password: await hash("customer", bcryptSalt),
          firstName: "customer firstname",
          lastName: "customer lastname",
          roles: ["customer"],
          email: "customer@example.com",
        },
        {
          username: "helper",
          password: await hash("helper", bcryptSalt),
          firstName: "helper firstname",
          lastName: "helper lastname",
          roles: ["helper"],
          email: "helper@example.com",
        }
      ]
    });
  } catch (error) {
    console.error(error);
  }

  void client.$disconnect();

  console.info("Seeding database with custom seed...");
  try {
    customSeed();
  } catch (error) {
    console.error(error);
  }
  console.info("Seeded database successfully");
}
