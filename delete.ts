import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function filteredPosts() {
  await prisma.post.delete({
    where: { id: 5 },
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
