export const Mutation = `
  createUsers(
    name: String!,
    email: String!,
    password: String!,
    id: String!,
    salt: String!
  ): Boolean!
`;
