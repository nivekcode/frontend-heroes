const heroes = [
    {name: 'Batman', image: 'batman.jpeg'},
    {name: 'Spiderman', image: 'spiderman.jpeg'},
    {name: 'Superman', image: 'superman.jpeg'}
];

const previousHeroBtn = document.getElementById('previous-hero-btn');
const nextHeroBtn = document.getElementById('next-hero-btn');
const heroImage = document.getElementById('hero-image');
const heroTitle = document.getElementById('hero-title-blab');

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
