interface Hero {
    id: number;
    name: string;
    image: string;
}

export const heroes: Hero[] = [
    {id: 0, name: 'Batman', image: 'batman.jpeg'},
    {id: 1, name: 'Spiderman', image: 'spiderman.jpeg'},
    {id: 2, name: 'Superman', image: 'superman.jpeg'}
];

const previousHeroBtn = document.getElementById('previous-hero-btn');
const nextHeroBtn = document.getElementById('next-hero-btn');
export const heroImage = document.getElementById('hero-image') as HTMLImageElement;
export const heroTitle = document.getElementById('hero-title') as HTMLTitleElement;

export const heroState = {
    selectedHeroIndex: 0
};

export const selectPreviousHero = () => {
    heroState.selectedHeroIndex = heroState.selectedHeroIndex === 0 ? heroes.length - 1 : heroState.selectedHeroIndex - 1;
    updateHero(heroImage, heroTitle);
}

export const selectNextHero = () => {
    heroState.selectedHeroIndex = heroState.selectedHeroIndex === heroes.length - 1 ? 0 : heroState.selectedHeroIndex + 1;
    updateHero(heroImage, heroTitle);
}

export const updateHero = (heroImage: HTMLImageElement, heroTitle: HTMLTitleElement) => {
    if (heroTitle && heroImage) {
        heroTitle.innerText = heroes[heroState.selectedHeroIndex].name;
        heroImage.src = `./assets/${heroes[heroState.selectedHeroIndex].image}`;
    }
};

previousHeroBtn?.addEventListener('click', selectPreviousHero);
nextHeroBtn?.addEventListener('click', selectNextHero);
updateHero(heroImage, heroTitle);
