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

let selectedHeroIndex = 0;

const selectPreviousHero = () => {
    selectedHeroIndex = selectedHeroIndex === 0 ? heroes.length - 1 : selectedHeroIndex - 1;
    updateHero();
}

const selectNextHero = () => {
    selectedHeroIndex = selectedHeroIndex === heroes.length - 1 ? 0 : selectedHeroIndex + 1;
    updateHero();
}

const updateHero = () => {
    heroTitle.innerText = heroes[selectedHeroIndex].name;
    heroImage.src = `./assets/${heroes[selectedHeroIndex].image}`;
};

previousHeroBtn?.addEventListener('click', selectPreviousHero);
nextHeroBtn?.addEventListener('click', selectNextHero);
updateHero();
