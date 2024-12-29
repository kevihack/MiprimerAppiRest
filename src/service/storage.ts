import { Car } from "../interfaces/car.interface";
import { Storage } from "../interfaces/storage";
import ItemModel from "../models/item";
import StorageModel from "../models/storage";

const registrarUpload = async ({ filename, idUser, path}:Storage) => {
    const responseItem = await StorageModel.create({filename, idUser, path})
    return responseItem
}



export{registrarUpload};