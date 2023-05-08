const heroes = [
    {name: 'Batman', image: 'batman.svg'},
    {name: 'Spiderman', image: 'spiderman.svg'},
    {name: 'Superman', image: 'superman.svg'},
];

const previousHeroBtn = document.querySelector('#previous-hero-btn');
const nextHeroBtn = document.querySelector('#next-hero-btn');
const heroImage = document.querySelector('#hero-image');
const heroTitle = document.querySelector('#hero-title')

let selectedHeroIndex = 0;

const selectPreviousHero = () => {
    if(selectedHeroIndex === 0) {
        selectedHeroIndex = heroes.length - 1;
    } else {
        selectedHeroIndex--;
    }
    updateHero();
}

const selectNextHero = () => {
    if(selectedHeroIndex === heroes.length - 1) {
        selectedHeroIndex = 0;
    } else {
        selectedHeroIndex++;
    }
    updateHero();
}

const updateHero = () => {
    heroTitle.innerText = heroes[selectedHeroIndex].name;
    heroImage.src = `./assets/${heroes[selectedHeroIndex].image}`;
};

previousHeroBtn.addEventListener('click', selectPreviousHero);
nextHeroBtn.addEventListener('click', selectNextHero);
updateHero();
