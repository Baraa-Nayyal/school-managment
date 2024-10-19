import mongoose from 'mongoose';
import { Division } from '../divisions/Division.schema';
export declare class Class {
    name: string;
    divisionsIds: Division[];
}
export declare const ClassSchema: mongoose.Schema<Class, mongoose.Model<Class, any, any, any, mongoose.Document<unknown, any, Class> & Class & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Class, mongoose.Document<unknown, {}, mongoose.FlatRecord<Class>> & mongoose.FlatRecord<Class> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
