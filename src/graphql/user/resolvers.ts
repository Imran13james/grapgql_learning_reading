import { createHmac, randomBytes } from "crypto";

const usersData = require('./return');
const getusersData = require('./getUsers');
const { PrismaClient } = require("@prisma/client");
const  prisma = new PrismaClient();
const queries = {
  getCurrentUsers: async () => {
    try {
      return usersData;
    } catch (error) {
      throw new Error('Error fetching users');
    }
  },
  getusers: async () => {
    try {
      return getusersData;
    } catch (error) {
      throw new Error('Error fetching users');
    }
  },
};
const mutations = {
  createUsers: async (_, { name, email, password, id }) => {
    try {
      const salt = randomBytes(32).toString("hex");
        const hashedPass = createHmac("sha256", salt)
          .update(password)
          .digest("hex");

      console.log("Creating user...");
      const createdUser = await prisma.user.create({
        data: {
          name,
          email,
          password:hashedPass,
          id,
          salt,
        },
      });
      console.log("Created user hai:", createdUser);
      if (!createdUser) {
        throw new Error("Failed to create user");
      }

      return {
        success: true,
        message: "User created successfully",
        userId: createdUser.id,
        // Include other relevant data from createdUser if needed
      };
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Failed to create user");
    }
  },
};
module.exports = { queries, mutations };

