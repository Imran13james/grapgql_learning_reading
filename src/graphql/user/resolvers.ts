// Assuming import of CreateUsersPayload from graphql/service/user
const { CreateUsersPayload } = require("../service/user");
const UserService = require("../service/user");

const Query = {
    getBooks: async () => {
        try {
            return "hello world";
        } catch (error) {
            throw new Error('Error fetching books');
        }
    },
};

const Mutation = {
    createUsers: async (_, { payload }) => {
        try {
            const result = await UserService.createUser(payload);
            return result.id;
        } catch (error) {
            throw new Error('Error creating user');
        }
    },
};

module.exports = { Query, Mutation };
