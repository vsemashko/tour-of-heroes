import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Role, Skill } from '../../user';
import { UserSkillsService } from './user-skills.service';

@Injectable()
export class UserSkillsResolve implements Resolve<Role> {
    constructor(private service: UserSkillsService) {
    }

    resolve(route: ActivatedRouteSnapshot): Promise<Skill[]>|boolean {
        return this.service.getSkills();
    }
}