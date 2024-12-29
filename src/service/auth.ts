import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

const registerNewUser = async ({email, password, name}: User) => {
    const checksIs = await UserModel.findOne({email})
    if(checksIs) return "ALREADY USER >:|"
    const passHash = await encrypt(password)
    const registerNewUser = await UserModel.create({
        email, 
        password: passHash, 
        name
    });
    return registerNewUser
}

const loginUser = async ({email, password}: Auth) => {
    const checksIs = await UserModel.findOne({email})
    if(!checksIs) return "NOT FOUND USER >:|"

    const passwordHash = checksIs.password
    const isCorrect = await verified(password, passwordHash)

    if(!isCorrect) return "PASSWORD_INCORRECT"

    const token = generateToken(checksIs.email)

    const data = {
        token,
        user:checksIs,
    }
    return data
}

export {registerNewUser, loginUser}