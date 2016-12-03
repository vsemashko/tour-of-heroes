import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Role } from '../../user';
import { UserRolesService } from './user-role.service';

@Injectable()
export class UserRoleResolve implements Resolve<Role> {
    constructor(private service: UserRolesService) {
    }

    resolve(route: ActivatedRouteSnapshot): Promise<Role[]>|boolean {
        return this.service.getRoles();
    }
}
