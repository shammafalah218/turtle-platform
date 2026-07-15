import { prisma } from "../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return Response.json(
        { message: "Please enter email and password." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user || user.password !== password) {
      return Response.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    return Response.json(
      {
        message: "Login successful.",
        user: {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return Response.json(
      { message: "Login failed. Check database connection." },
      { status: 500 }
    );
  }
}