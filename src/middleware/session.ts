import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";



const checkJwt = (req:RequestExt    , res:Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || ""
        const jwt = jwtByUser.split(' ').pop()
        const isUser = verifyToken(`${jwt}`) as {id:string}
        if(!isUser){
            res.status(401)
            res.send("no tienes un jwt valido")
        } else {
            req.user = isUser
            next()
        }
    } catch (e) {
        console.log({e})
        res.status(400)
        res.send("SESSION NO VALIDA")
    }
}

export { checkJwt }