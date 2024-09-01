import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  for (let i = 1; i <= 10; i++) {
    const user = await prisma.user.create({
      data: {
        name: `User ${i}`,
        email: `user${i}@example.com`,
        password: 'password123', // Note: In real applications, never store passwords in plain text.
      },
    });

    // Seed Posts for each user
    for (let j = 1; j <= 10; j++) {
      await prisma.post.create({
        data: {
          title: `Post ${j} by ${user.name}`,
          content: `This is the content of post ${j} by ${user.name}.`,
          userId: user.id,
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
