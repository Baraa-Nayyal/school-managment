import { StudentsService } from './students.service';
import { AddStudentDto, CreateFamilyDto } from 'src/dto/students';
export declare class StudentsController {
    private studentsService;
    constructor(studentsService: StudentsService);
    addFamily(createFamilyDto: CreateFamilyDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Family.schema").Family> & import("../schemas/Family.schema").Family & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    AddStudent(createStudentDto: AddStudentDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Student.schema").Student> & import("../schemas/Student.schema").Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    GetStudents(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/Student.schema").Student> & import("../schemas/Student.schema").Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    GetStudentsNames(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/Student.schema").Student> & import("../schemas/Student.schema").Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    GetStudentById(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Student.schema").Student> & import("../schemas/Student.schema").Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    updateStudent(id: string, updateStudentDto: AddStudentDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Student.schema").Student> & import("../schemas/Student.schema").Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    deleteStudent(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Student.schema").Student> & import("../schemas/Student.schema").Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    GetFamilies(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/Family.schema").Family> & import("../schemas/Family.schema").Family & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    GetFamiliesNames(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/Family.schema").Family> & import("../schemas/Family.schema").Family & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    deleteFamily(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Family.schema").Family> & import("../schemas/Family.schema").Family & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
}
