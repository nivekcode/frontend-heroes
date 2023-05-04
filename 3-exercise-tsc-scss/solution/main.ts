interface Hero {
    name: string;
    image: string;
}

const heroes: Hero[] = [
    {name: 'Batman', image: 'batman.svg'},
    {name: 'Spiderman', image: 'spiderman.svg'},
    {name: 'Superman', image: 'superman.svg'}
];

const previousHeroBtn = document.querySelector('#previous-hero-btn');
const nextHeroBtn = document.querySelector('#next-hero-btn');
const heroImage = document.querySelector('#hero-image') as HTMLImageElement;
const heroTitle = document.querySelector('#hero-title') as HTMLImageElement;

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
    if(heroTitle) {
        heroTitle.innerText = heroes[selectedHeroIndex].name;
    }
    if(heroImage) {
        heroImage.src = `./assets/${heroes[selectedHeroIndex].image}`;
    }
};

previousHeroBtn?.addEventListener('click', selectPreviousHero);
nextHeroBtn?.addEventListener('click', selectNextHero);
updateHero();
