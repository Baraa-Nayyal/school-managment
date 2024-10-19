import { Model } from 'mongoose';
import { AddStudentDto, CreateFamilyDto } from 'src/dto/students';
import { Family } from 'src/schemas/Family.schema';
import { Invoice } from 'src/schemas/Invoice.schema';
import { Student } from 'src/schemas/Student.schema';
export declare class StudentsService {
    private studentModel;
    private invoiceModel;
    private familyModel;
    constructor(studentModel: Model<Student>, invoiceModel: Model<Invoice>, familyModel: Model<Family>);
    addStudent(createStudentDto: AddStudentDto): Promise<import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    getStudents(): Promise<(import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    getFamilies(): Promise<(import("mongoose").Document<unknown, {}, Family> & Family & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    getFamiliesNames(): Promise<(import("mongoose").Document<unknown, {}, Family> & Family & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    addFamily(createFamilyDto: CreateFamilyDto): Promise<import("mongoose").Document<unknown, {}, Family> & Family & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    getStudentsNames(): Promise<(import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    updateStudent(id: string, updateStudentDto: AddStudentDto): Promise<import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    deleteStudent(id: string): Promise<import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    deleteFamily(id: string): Promise<import("mongoose").Document<unknown, {}, Family> & Family & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    getStudentById(studentId: string): Promise<import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
}
