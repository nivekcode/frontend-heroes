interface Hero {
    name: string;
    image: string;
}

const heroes: Hero[] = [
    {name: 'Batman', image: 'batman.jpeg'},
    {name: 'Spiderman', image: 'spiderman.jpeg'},
    {name: 'Superman', image: 'superman.jpeg'}
];

const previousHeroBtn = document.getElementById('previous-hero-btn');
const nextHeroBtn = document.getElementById('next-hero-btn');
const heroImage = document.getElementById('hero-image') as HTMLImageElement;
const heroTitle = document.getElementById('hero-title') as HTMLTitleElement;

let selectedHero = 0;

const selectPreviousHero = () => {
    selectedHero = selectedHero === heroes.length - 1 ? 0 : selectedHero + 1;
    updateHero(selectedHero, heroImage, heroTitle);
}

const selectNextHero = () => {
    selectedHero = selectedHero === 0 ? heroes.length - 1 : selectedHero - 1;
    updateHero(selectedHero, heroImage, heroTitle);
}

const updateHero = (heroIndex: number, heroImage: HTMLImageElement, heroTitle: HTMLTitleElement) => {
    if (heroTitle && heroImage) {
        heroTitle.innerText = heroes[heroIndex].name;
        heroImage.src = `./assets/${heroes[heroIndex].image}`;
    }
};

previousHeroBtn?.addEventListener('click', selectNextHero);
nextHeroBtn?.addEventListener('click', selectPreviousHero);
updateHero(0, heroImage, heroTitle);
