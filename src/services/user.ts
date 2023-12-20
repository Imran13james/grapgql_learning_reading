const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { randomBytes, createHmac } = require('node:crypto');
export interface CreateUserPayload {
    name?: string;
    email: string;
    password: string;
}
export interface GetusertokenPayload {
    email: string;
    password: string;
}

class UserService {
    public static async createUsers(payload: CreateUserPayload): Promise<any> {
        const { name, email, password } = payload;
        const salt = randomBytes(32).toString('hex');
        const hashedPass = createHmac('sha256', salt)
            .update(password)
            .digest('hex');

        try {
            const createdUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPass,
                    salt,
                },
            });
            console.log("Created user:", createdUser);
            return {
                success: true,
                message: "User created successfully",
                user: createdUser, // Return the created user data
            };
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    }

private static getuserEmail(email:String){
    return prisma.users.findUnique({where:{email}})
}
    public static async getuserTokens(payload: GetusertokenPayload): Promise<any> {
        const { email, password } = payload;
const user = await UserService.getuserEmail(email)
if (!user) throw new Error("user not found");

}
}

export default UserService;
