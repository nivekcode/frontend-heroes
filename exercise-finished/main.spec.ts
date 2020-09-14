import * as sut from './main';

describe('hero app', () => {

    describe('Selection', () => {

        it('should select the previous hero', () => {
            sut.heroState.selectedHeroIndex = 1;
            sut.selectPreviousHero();
            expect(sut.heroState.selectedHeroIndex).toBe(0);
        });

        it('should select the last hero if the first one is currently selected', () => {
            sut.heroState.selectedHeroIndex = 0;
            sut.selectPreviousHero();
            expect(sut.heroState.selectedHeroIndex).toBe(sut.heroes.length - 1);
        });

        it('should select the next hero', () => {
            sut.heroState.selectedHeroIndex = 1;
            sut.selectNextHero();
            expect(sut.heroState.selectedHeroIndex).toBe(2);
        });

        it('should select the first hero if the last one is currently selected', () => {
            // @ts-ignore
            sut.selectedHero = sut.heroes.length - 1;
            sut.selectNextHero();
            expect(sut.heroState.selectedHeroIndex).toBe(0);
        });

    });

    describe('update Hero', () => {

        it('should set the innerText of the heroTitle element to Spiderman if the index is 1', () => {
            const heroImage = {} as HTMLImageElement;
            const heroTitle = {innerText: ''} as HTMLTitleElement;
            sut.heroState.selectedHeroIndex = 1;

            sut.updateHero(heroImage, heroTitle);
            expect(heroTitle.innerText).toBe('Spiderman');
        });

        it('should set the src of the heroImage element to "assets/spiderman.jpeg" if the index is 1', () => {
            const heroImage = {src: ''} as HTMLImageElement;
            const heroTitle = {} as HTMLTitleElement;
            sut.heroState.selectedHeroIndex = 1;

            sut.updateHero(heroImage, heroTitle);
            expect(heroImage.src).toBe('./assets/spiderman.jpeg');
        });

    });

})
