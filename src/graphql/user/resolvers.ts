const usersData = require('./return');
const getusersData = require('./getUsers');

const resolvers = {
    Query: {
      getCurrentUsers: async () => {
        try {
          return usersData; // Assuming usersData is an iterable (e.g., an array of objects)
        } catch (error) {
          throw new Error('Error fetching users');
        }
      },
      getusers: async () => {
        try {
          return getusersData; // Assuming usersData is an iterable (e.g., an array of objects)
        } catch (error) {
          throw new Error('Error fetching users');
        }
      },
    },

  };
  
  module.exports = resolvers;
  