export interface Hero {
    name: string;
    image: string;
}

export class HeroService {


    public callHero(index: number, heroes: Hero[]): string {
        return `Calling hero ${heroes[index].name}`;
    }

    public calculateHeroMissions(heroes: Hero[]): {[key: string]: number} {
        return heroes.reduce((acc, hero) => {
            if(acc[hero.name]) {
                acc[hero.name] += 1;
                return acc;
            }
            acc[hero.name] = 1;
            return acc;
        }, {});
    }

    /*
     TODO: Implement the callHero method based on the description inside the hero-service.spec.ts file.
     */

    /*
     TODO: Implement the calculateHeroMissions method based on the description inside the hero-service.spec.ts file.
     */
}
