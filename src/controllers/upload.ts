import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle";
import { registrarUpload } from "../service/storage";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage";



const getFile = async (req:RequestExt, res:Response) => {
    try {
        const { user,file } = req
        console.log(file)
        const dataToRegister: Storage= {
            filename:`${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`
        }
        const response = await registrarUpload(dataToRegister)
        res.send("Aqui_debe_Estar_File")
    } catch (e) {
        handleHttp(res,"Error_get_blog")
    }
}

export {getFile}