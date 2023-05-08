export interface Hero {
    name: string;
    image: string;
}

export class HeroService {

    public callHero(index: number, heroes: Hero[]): string {
        if(index < 0 || index >= heroes.length) {
            return 'No hero at this index';
        }

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
}
