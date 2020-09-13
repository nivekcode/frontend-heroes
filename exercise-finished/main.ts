interface Hero {
    name: string;
    image: string;
}

export const heroes: Hero[] = [
    {name: 'Batman', image: 'batman.jpeg'},
    {name: 'Spiderman', image: 'spiderman.jpeg'},
    {name: 'Superman', image: 'superman.jpeg'}
];

const previousHeroBtn = document.getElementById('previous-hero-btn');
const nextHeroBtn = document.getElementById('next-hero-btn');
export const heroImage = document.getElementById('hero-image') as HTMLImageElement;
export const heroTitle = document.getElementById('hero-title') as HTMLTitleElement;

export let selectedHero = 0;

export const selectPreviousHero = () => {
    selectedHero = selectedHero === 0 ? heroes.length - 1 : selectedHero - 1;
    updateHero(selectedHero, heroImage, heroTitle);
}

export const selectNextHero = () => {
    selectedHero = selectedHero === heroes.length - 1 ? 0 : selectedHero + 1;
    updateHero(selectedHero, heroImage, heroTitle);
}

export const updateHero = (heroIndex: number, heroImage: HTMLImageElement, heroTitle: HTMLTitleElement) => {
    if (heroTitle && heroImage) {
        heroTitle.innerText = heroes[heroIndex].name;
        heroImage.src = `./assets/${heroes[heroIndex].image}`;
    }
};

previousHeroBtn?.addEventListener('click', selectPreviousHero);
nextHeroBtn?.addEventListener('click', selectNextHero);
updateHero(0, heroImage, heroTitle);
