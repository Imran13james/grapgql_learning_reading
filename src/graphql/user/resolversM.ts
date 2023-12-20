const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const resolversM = {
  Mutation: {
    createUser: async (_, { name, email, password,salt }) => {
      await prisma.User.create({
        data: {
          name,
          email,
          password,
          salt,
        },
      });
      return true;
    },
  },
};

module.exports = resolversM;
