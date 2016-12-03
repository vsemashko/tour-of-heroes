import { Injectable } from '@angular/core';
import { Role } from '../../user';


let ROLES = [
    new Role(1, 'Admin'),
    new Role(2, 'Engineer'),
    new Role(3, 'Designer')
];
let rolesPromise = Promise.resolve(ROLES);
@Injectable()
export class UserRolesService {
    getRoles(): Promise<Role[]> {
        return rolesPromise;
    }
}
