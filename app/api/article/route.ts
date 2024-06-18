import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req: any, res: any) {
  try {
    const prisma = new PrismaClient();
    let { title, body, imageUrl, category, author } = await req.json();

    const data = { title, body, imageUrl, category, author };

    console.log(data);

    const article = await prisma.article.create({
      data: {
        title: data.title,
        content: data.body,
        imageUrl: data.imageUrl,
        category: {
          connect: { id: parseInt(data.category) },
        },
        author: {
          connect: { id: parseInt(data.author) },
        },
      },
    });

    console.log(article);

    return NextResponse.json({
      message: "i got it",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message: "somethig is wrong",
    });
  }
}


