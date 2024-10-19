import mongoose from 'mongoose';
import { Student } from './Student.schema';
export declare class Family {
    familyName: string;
    students: Student[];
}
export declare const FamilySchema: mongoose.Schema<Family, mongoose.Model<Family, any, any, any, mongoose.Document<unknown, any, Family> & Family & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Family, mongoose.Document<unknown, {}, mongoose.FlatRecord<Family>> & mongoose.FlatRecord<Family> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
