import { HydratedDocument, Model } from "mongoose";

// interface UserModel extends Model<IUser, {}, IUserMethods>{
//     createWithFullName(
//         name:string
//     ): Promise <HydratedDocument<IUser, IUserMethods>>;
// }

export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
        firstName: string;
        middleName?: string;
        lastname: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
}


export interface IUserMethods {
    fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
