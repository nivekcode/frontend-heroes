export interface Hero {
    name: string;
    image: string;
}

export class HeroService {
/*
 TODO: Implement the callHero method based on the description inside the hero-service.spec.ts file.
 */
    callHero(index: number, heroes: Hero[]): string {
        return `Calling hero ${heroes[index].name}`;
    }

/*
 TODO: Implement the calculateHeroMissions method based on the description inside the hero-service.spec.ts file.
 */
}