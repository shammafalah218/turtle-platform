import { prisma } from "../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, password } = body;

    if (!fullName || !email || !password) {
      return Response.json(
        { message: "Please fill all fields." },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return Response.json(
        { message: "This email is already registered." },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password,
      },
    });

    return Response.json({
      message: "Registration successful.",
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return Response.json(
      { message: "Registration failed. Check database connection." },
      { status: 500 }
    );
  }
}