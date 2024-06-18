// import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: any, res: any) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    console.log("User not found");
    return NextResponse.json({ message: "User not found" });
  }

  if (user.password !== password) {
    console.log("Invalid password");
    return NextResponse.json({ message: "Invalid password" });
  }
  console.log("Login successful");

  return NextResponse.json({
    message: "login successful",
    userName: user.firstName,
  });

  // Redirect to the appropriate page after successful login
}
