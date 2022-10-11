import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function filteredPosts() {
  await prisma.post.findMany({
    where: {
      OR: [
        { title: { contains: "hello" } },
        { content: { contains: "hello" } },
      ],
    },
  });
}

filteredPosts()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
