import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function post() {
  await prisma.post.create({
    data: {
      title: "This is a test case",
      author: {
        connect: { email: "raditya@email.co" },
      },
    },
  });

  //   await prisma.profile
  //     .findUnique({
  //       where: { id: 1 },
  //     })
  //     .user()
  //     .posts();

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
}

post()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: any) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
