export class Hero {

    constructor(public id: number,
                public name: string,
                public power?: string,
                public alterEgo?: string,
                public skills:HeroSkill[] = []) {
    }

}

export class HeroSkill {
    constructor(public id: number,
                public name: string) {
    }
}