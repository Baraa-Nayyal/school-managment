declare class ClassDivisionDto {
    classId: string;
    divisionId: string;
}
export declare class CreateTeacherDto {
    name: string;
    classes: ClassDivisionDto[];
}
export {};
