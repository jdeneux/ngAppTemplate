export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    token?: string;
}

export class UserAuthenticationDto {
    username: string;
    password: string;
}

export class UserNewRegisterDto {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    role: string;
}
