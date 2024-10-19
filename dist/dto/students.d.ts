export declare class AddStudentDto {
    name: string;
    dadName: string;
    momName: string;
    area: string;
    dadNumber: string;
    birthDate: string;
    momNumber: string;
    class: string;
    division: string;
    driver: string;
    familyId?: string;
}
export declare class CreateFamilyDto {
    familyName: string;
    studentIds: string[];
}
