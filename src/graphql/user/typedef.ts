export const typeDefs = `#graphql
  type Book {
    userId: String
    id: String
    title: String
    completed: String
    number: String
    name: String
    username: String
    email: String
    address: String
    phone: String
    User: String
  }
  type User {
    userId: String
    title: String
    completed: Boolean
    id: String
    name: String
    username: String
    email: String
    address: Address
    phone: phone
    User: String
  }
  type phone{
    whatsApp:String
    Number:String
  }

  type Address {
    country: String
    province: String
    location: Location
  }

  type Location {
    city: String
    main: String
  }
`;


