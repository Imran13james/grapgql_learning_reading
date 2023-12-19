const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const resolversM = {
  Mutation: {
    createUser: async (_, { name, email, password, id }) => {
      await prisma.user.create({
        data: {
          name,
          email,
          password,
          id,
        },
      });
      return true;
    },
  },
};

module.exports = resolversM;
