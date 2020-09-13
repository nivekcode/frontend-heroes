import * as sut from './main';

describe('hero app', () => {

    describe('Selection', () => {

        it('should select the previous hero', () => {
            // @ts-ignore
            sut.selectedHero = 1;
            sut.selectPreviousHero();
            expect(sut.selectedHero).toBe(0);
        });

        it('should select the last hero if the first one is currently selected', () => {
            // @ts-ignore
            sut.selectedHero = 0;
            sut.selectPreviousHero();
            expect(sut.selectedHero).toBe(sut.heroes.length - 1);
        });

        it('should select the next hero', () => {
            // @ts-ignore
            sut.selectedHero = 1;
            sut.selectNextHero();
            expect(sut.selectedHero).toBe(2);
        });

        it('should select the first hero if the last one is currently selected', () => {
            // @ts-ignore
            sut.selectedHero = sut.heroes.length - 1;
            sut.selectNextHero();
            expect(sut.selectedHero).toBe(0);
        });

    });

})
