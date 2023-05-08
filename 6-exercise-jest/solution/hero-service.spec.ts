import {HeroService} from './hero-service';

describe('HeroService', () => {

    let sut: HeroService;
    const HERO_MOCKS = [
        {name: 'Batman', image: 'some image path'},
        {name: 'Superman', image: 'some image path'},
        {name: 'Spiderman', image: 'some image path'},
    ];

    beforeEach(() => {
        sut = new HeroService();
    });


    describe('callHero', () => {

        it('should return "No hero at this index" when the index is smaller than 0', () => {
            expect(
                sut.callHero(-1, HERO_MOCKS)
            ).toBe('No hero at this index');
        });

        it('should return "No hero at this index" when the index is bigger than the amount of heroes', () => {
            expect(
                sut.callHero(100, HERO_MOCKS)
            ).toBe('No hero at this index');
        });

        it('should return "Calling hero Batman" when the index is 0', () => {
            expect(
                sut.callHero(0, HERO_MOCKS)
            ).toBe('Calling hero Batman');
        });

        it('should return "Calling hero Superman" when the index is 0', () => {
            expect(
                sut.callHero(1, HERO_MOCKS)
            ).toBe('Calling hero Superman');
        });

        it('should return "Calling hero Spiderman" when the index is 0', () => {
            expect(
                sut.callHero(2, HERO_MOCKS)
            ).toBe('Calling hero Spiderman');
        });
    });

    describe('Calculate hero missions', function () {

        it('should return the number of missions for each hero', function () {
            const heroMissions = [
                {name: 'Batman', image: 'some image path'},
                {name: 'Batman', image: 'some image path'},
                {name: 'Spiderman', image: 'some image path'},
                {name: 'Spiderman', image: 'some image path'},
                {name: 'Spiderman', image: 'some image path'},
                {name: 'Superman', image: 'some image path'},
            ];

            const expectedMissionSummary = {
                Batman: 2,
                Spiderman: 3,
                Superman: 1
            }
            expect(sut.calculateHeroMissions(heroMissions)).toEqual(expectedMissionSummary);
        });

    });
});
