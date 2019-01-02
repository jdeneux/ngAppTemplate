export class User {
    id: number;
    username: string;
    passwordHash: string;
    passwordSalt: string;
    firstName: string;
    lastName: string;
    role: string;
    token?: string;
}
