// DEFINE TYPES OF USER
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    gender: "male" | "female";
    age: number;
    hair: {
        color: string;
    };
    address: {
        postalCode: string;
    };
    company: {
        department: string
    }
}