const { pprismaClient } = require('./db')
const { createHmac } = require('node:crypto')
const { randomBytes } = require('node:crypto')
 
export interface CreateUsersPalyod {
    firstName: String
    lastName?: String
    id: String
    password: String
    email:String
    salt: String
}
export interface getUserTokenpayload{
    password: String
    email:String

}
class UserService {
    public static createUser(payload: CreateUsersPalyod) {
        const { firstName, lastName, id, password, salt ,email} = payload
        const salti = randomBytes(32).toString()
        const hashedPass = createHmac('sha256', salti).update(password).digest('hex')
        return pprismaClient.user.create({
            data: {
                firstName,
                lastName,
                email,
                id,
                salt,
                password: hashedPass,
            }
        })
    }
    public static  getuserToken(payload:getUserTokenpayload){
        const {email,password}= payload;

    }
}
