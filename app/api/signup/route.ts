import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: any, res: any) {
  let { firstName, lastName, age, email, password } = await req.json();

  const data = { firstName, lastName, age, email, password };

  // const data = await req.json();

  const user = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      age: parseInt(data.age),
      email: data.email,
      password: data.password,
      updatedAt: new Date()
    },
  });

  console.log(user);

  return NextResponse.json({ message: "user created" });
}
