import {Schema, Types, model, Model} from "mongoose"
import { User } from "../interfaces/user.interface";
import { Storage } from "../interfaces/storage";


const StorageSchema = new Schema<Storage>(
    {
        filename:{
            type: String,
        },
        idUser:{
            type: String,
        },
        path:{
            type: String,
        },
    },
    {
        versionKey:false,
        timestamps:true,
    }
);

const StorageModel = model('storage', StorageSchema);

export default StorageModel;