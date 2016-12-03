import { Injectable } from '@angular/core';
import { Skill } from '../../user';


let SKILLS = [
    new Skill(1, 'Javascript'),
    new Skill(2, 'Angular'),
    new Skill(3, 'Java'),
    new Skill(4, 'Typescript'),
    new Skill(5, 'NodeJs')
];
let skillsPromise = Promise.resolve(SKILLS);
@Injectable()
export class UserSkillsService {
    getSkills(): Promise<Skill[]> {
        return skillsPromise;
    }
}
