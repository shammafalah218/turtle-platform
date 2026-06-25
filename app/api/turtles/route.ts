import { prisma } from "../../../lib/prisma";

export async function GET() {
  const count = await prisma.turtle.count();

  if (count === 0) {
    await prisma.turtle.createMany({
      data: [
        {
          id: "T-001",
          name: "Fujairah Turtle",
          location: "Fujairah Coast",
          habitat: "Feeding Area",
          riskLevel: "Medium",
          status: "Active Tracking",
        },
        {
          id: "T-002",
          name: "Khor Fakkan Turtle",
          location: "Khor Fakkan",
          habitat: "Migration Route",
          riskLevel: "Low",
          status: "Moving",
        },
        {
          id: "T-003",
          name: "Dibba Turtle",
          location: "Dibba Coast",
          habitat: "Resting Area",
          riskLevel: "High",
          status: "Needs Monitoring",
        },
      ],
    });
  }

  const turtles = await prisma.turtle.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return Response.json({
    message: "Turtle tracking data loaded from database",
    totalTurtles: turtles.length,
    data: turtles,
  });
}