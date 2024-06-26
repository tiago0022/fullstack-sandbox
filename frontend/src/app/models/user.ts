export interface IUser {
    id: string;
    email: string;
    name: string;
}

export class User {

    id: string;
    email: string;
    name: string;

    constructor(userInterface?: IUser | Object) {
        Object.assign(this, userInterface);
    }

}