import { Gender } from "../user.entity";
export interface ProfileDto {
    FirstName: string;
    LastName: string;
    Email:string;
    City: string;
    State: string;
    Country: string;
    PostalCode: string;
    BirthDate: Date;
    Gender: Gender
}


