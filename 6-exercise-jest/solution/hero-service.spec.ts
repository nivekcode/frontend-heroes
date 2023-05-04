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

    /*
    TODO 5: Try to use test-driven development to
    implement the following calculateHeroMissions method:

     // HINT: To run a test you can either use the test npm script or the test:watch npm script.

    The calculateHeroMissions method
    accepts an array of heroes. It will then return an object that contains
    the number of missions each hero has completed. So for example, if the
    input is ['Batman', 'Spiderman', 'Batman', 'Superman'], it will return
    {Batman: 2, Spiderman: 1, Superman: 1}.
     */
});
