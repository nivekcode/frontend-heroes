import {HeroService} from './hero-service';

describe('HeroService', () => {

    let sut: HeroService;

    beforeEach(() => {
        sut = new HeroService();
    });

    describe('Call hero', () => {
        it('should call Batman', () => {

            const heroes = [
                {name: 'Batman', image: 'batman.jpeg'},
                {name: 'Superman', image: 'superman.jpeg'},
                {name: 'Spiderman', image: 'spiderman.jpeg'},
            ]
            const call = sut.callHero(0, heroes);
            expect(call).toBe('Calling hero Batman');
        });

        it('should call Superman', () => {

            const heroes = [
                {name: 'Batman', image: 'batman.jpeg'},
                {name: 'Superman', image: 'superman.jpeg'},
                {name: 'Spiderman', image: 'spiderman.jpeg'},
            ]
            const call = sut.callHero(1, heroes);
            expect(call).toBe('Calling hero Superman');
        });

        it('should call Superman', () => {

            const heroes = [
                {name: 'Batman', image: 'batman.jpeg'},
                {name: 'Superman', image: 'superman.jpeg'},
                {name: 'Spiderman', image: 'spiderman.jpeg'},
            ]
            const call = sut.callHero(3, heroes);
            expect(call).toBe('No hero at this index');
        });
    });


    describe('Calculate hero missions', () => {

        it('should deliver a summary of the correct hero calls', () => {
            const expected = {
                Batman: 2,
                Superman: 1,
                Spiderman: 2
            };
            const calledHeroes = ['Batman', 'Spiderman', 'Batman', 'Superman', 'Spiderman'];
            const actual = sut.calculateHeroMissions(calledHeroes);
            expect(actual).toEqual(expected);
        });
    });

});