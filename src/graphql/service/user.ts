const { pprismaClient } = require('./db');
const { createHmac, randomBytes } = require('crypto');

interface CreateUsersPayload {
  firstName: string;
  lastName?: string;
  id: string;
  password: string;
  salt: string;
}

class UserService {
  public static async createUser(payload: CreateUsersPayload) {
    const { firstName, lastName, id, password, salt } = payload;
    const newSalt = salt || randomBytes(32).toString('hex'); // Use provided salt or generate a new one

    const hashedPassword = createHmac('sha256', newSalt).update(password).digest('hex');

    try {
      const createdUser = await pprismaClient.user.create({
        data: {
          firstName,
          lastName,
          id,
          salt: newSalt,
          password: hashedPassword,
        },
      });

      return createdUser;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }
}

module.exports = UserService;
