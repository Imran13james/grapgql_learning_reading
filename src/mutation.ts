const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const mutations = {
    CreateUsers: async (_, { input }) => {
        const { id, FirstName, lastName, email, password, salt, number } = input;
        await prisma.Users.create({
            data: { id, FirstName, lastName, email, password, salt, number }
        });
        return true;
    }
}
module.exports = mutations;
