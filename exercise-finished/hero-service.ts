export interface Hero {
    name: string;
    image: string;
}

export class HeroService {

    callHero(index: number, heroes: Hero[]): string {
        if(index < 0 || index >= heroes.length) {
            return 'No hero at this index';
        }
        return `Calling hero ${heroes[index].name}`;
    }

    calculateHeroMissions(calledHeroes: string[]): { [key: string]: number } {
        return calledHeroes.reduce((acc, hero) => {
            acc[hero] = acc[hero] ? acc[hero] + 1 : 1;
            return acc;
        }, {});
    }
}