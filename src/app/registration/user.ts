export class User {
    prefix: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
    skills: Skill[] = [];
}

export class Role {
    constructor(public id: number,
                public name: string) {
    }
}

export class Skill {
    constructor(public id: number,
                public name: string) {
    }
}